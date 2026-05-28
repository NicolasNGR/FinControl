"""
FinControl - Banco de Dados Redis
Substitui o localStorage do navegador por um banco real.

Estruturas usadas:
  - Hash    : dados de entidades (usuario, lancamento, categoria, meta)
  - Set     : índices por usuário (ids de lançamentos, categorias, metas)
  - String  : sessão de usuário autenticado
"""

import redis
import json
import hashlib
import uuid
from datetime import datetime, timedelta
from typing import Optional

# ────────────────────────────────────────────────────────────
# Conexão
# ────────────────────────────────────────────────────────────

def conectar(host="localhost", port=6379, db=0, password=None) -> redis.Redis:
    """Cria e retorna conexão com o Redis. Lança exceção se não conseguir conectar."""
    r = redis.Redis(
        host=host,
        port=port,
        db=db,
        password=password,
        decode_responses=True
    )
    r.ping()  # garante que a conexão está viva
    return r


# ────────────────────────────────────────────────────────────
# Utilidades
# ────────────────────────────────────────────────────────────

def _hash_senha(senha: str) -> str:
    return hashlib.sha256(senha.encode()).hexdigest()

def _novo_id() -> str:
    return str(uuid.uuid4())

def _agora() -> str:
    return datetime.now().isoformat()


# ────────────────────────────────────────────────────────────
# USUÁRIOS
# ────────────────────────────────────────────────────────────

def criar_usuario(r: redis.Redis, nome: str, email: str, senha: str, role: str = "user") -> dict:
    """
    Cria um novo usuário.
    Retorna o dicionário do usuário criado, ou lança ValueError se email já existe.
    """
    email = email.strip().lower()

    # verifica duplicidade
    if r.hexists("emails", email):
        raise ValueError(f"E-mail '{email}' já está cadastrado.")

    uid = _novo_id()
    usuario = {
        "id": uid,
        "nome": nome.strip(),
        "email": email,
        "senha": _hash_senha(senha),
        "role": role,
        "ativo": "true",
        "criado_em": _agora(),
    }

    r.hset(f"usuario:{uid}", mapping=usuario)
    r.hset("emails", email, uid)   # índice email → id

    return {**usuario, "senha": "***"}


def login(r: redis.Redis, email: str, senha: str) -> Optional[dict]:
    """
    Verifica credenciais.
    Retorna o usuário (sem senha) se válido, ou None se inválido.
    """
    email = email.strip().lower()
    uid = r.hget("emails", email)
    if not uid:
        return None

    usuario = r.hgetall(f"usuario:{uid}")
    if not usuario:
        return None

    if usuario.get("ativo") == "false":
        return None

    if usuario.get("senha") != _hash_senha(senha):
        return None

    # retorna sem a senha
    return {k: v for k, v in usuario.items() if k != "senha"}


def criar_sessao(r: redis.Redis, uid: str, ttl_horas: int = 24) -> str:
    """
    Cria um token de sessão para o usuário.
    Expira automaticamente após `ttl_horas` horas.
    """
    token = _novo_id()
    r.setex(f"sessao:{token}", int(timedelta(hours=ttl_horas).total_seconds()), uid)
    return token


def verificar_sessao(r: redis.Redis, token: str) -> Optional[str]:
    """Retorna o uid da sessão, ou None se inválida/expirada."""
    return r.get(f"sessao:{token}")


def encerrar_sessao(r: redis.Redis, token: str):
    """Remove o token de sessão (logout)."""
    r.delete(f"sessao:{token}")


def listar_usuarios(r: redis.Redis) -> list:
    """Retorna todos os usuários (sem senha). Uso administrativo."""
    usuarios = []
    for email, uid in r.hgetall("emails").items():
        u = r.hgetall(f"usuario:{uid}")
        if u:
            usuarios.append({k: v for k, v in u.items() if k != "senha"})
    return usuarios


def desativar_usuario(r: redis.Redis, uid: str):
    """Desativa uma conta de usuário (sem excluir os dados)."""
    r.hset(f"usuario:{uid}", "ativo", "false")


# ────────────────────────────────────────────────────────────
# LANÇAMENTOS
# ────────────────────────────────────────────────────────────

def criar_lancamento(r: redis.Redis, uid: str, descricao: str, valor: float,
                     tipo: str, data: str, categoria: str, observacao: str = "") -> dict:
    """
    Cria um lançamento financeiro.
    tipo: 'receita' ou 'despesa'
    data: formato 'YYYY-MM-DD'
    valor: sempre positivo; o sinal é controlado pelo campo `tipo`.
    """
    if tipo not in ("receita", "despesa"):
        raise ValueError("tipo deve ser 'receita' ou 'despesa'")

    lid = _novo_id()
    valor_final = abs(valor) if tipo == "receita" else -abs(valor)

    lanc = {
        "id": lid,
        "usuario_id": uid,
        "descricao": descricao.strip(),
        "valor": str(valor_final),
        "tipo": tipo,
        "data": data,
        "categoria": categoria.strip(),
        "observacao": observacao.strip(),
        "criado_em": _agora(),
    }

    r.hset(f"lancamento:{lid}", mapping=lanc)
    r.sadd(f"lancamentos_usuario:{uid}", lid)   # índice usuário → seus lançamentos

    return lanc


def listar_lancamentos(r: redis.Redis, uid: str, mes: str = None,
                       tipo: str = None, busca: str = None) -> list:
    """
    Retorna lançamentos do usuário.
    mes: filtro opcional, formato 'YYYY-MM'
    tipo: 'receita', 'despesa' ou None (todos)
    busca: texto para filtrar em descrição e categoria
    """
    ids = r.smembers(f"lancamentos_usuario:{uid}")
    lancamentos = []

    for lid in ids:
        l = r.hgetall(f"lancamento:{lid}")
        if not l:
            continue

        # filtros
        if mes and not l["data"].startswith(mes):
            continue
        if tipo and l["tipo"] != tipo:
            continue
        if busca:
            q = busca.lower()
            if q not in l["descricao"].lower() and q not in l["categoria"].lower():
                continue

        lancamentos.append(l)

    # ordena do mais recente para o mais antigo
    lancamentos.sort(key=lambda x: x["data"], reverse=True)
    return lancamentos


def excluir_lancamento(r: redis.Redis, uid: str, lid: str) -> bool:
    """Exclui um lançamento. Retorna True se encontrado e excluído."""
    if not r.hexists(f"lancamento:{lid}", "id"):
        return False
    r.delete(f"lancamento:{lid}")
    r.srem(f"lancamentos_usuario:{uid}", lid)
    return True


# ────────────────────────────────────────────────────────────
# CATEGORIAS
# ────────────────────────────────────────────────────────────

def criar_categoria(r: redis.Redis, uid: str, nome: str,
                    icone: dict, cor: str, padrao: bool = False) -> dict:
    """
    Cria uma categoria.
    icone: dicionário com 'id', 'p' (path SVG) e 'label'
    cor: string hexadecimal, ex: '#24784F'
    """
    cid = _novo_id()
    cat = {
        "id": cid,
        "usuario_id": uid,
        "nome": nome.strip(),
        "icone": json.dumps(icone),   # serializado como JSON dentro do hash
        "cor": cor,
        "padrao": "true" if padrao else "false",
        "criado_em": _agora(),
    }

    r.hset(f"categoria:{cid}", mapping=cat)
    r.sadd(f"categorias_usuario:{uid}", cid)

    return cat


def listar_categorias(r: redis.Redis, uid: str) -> list:
    """Retorna todas as categorias do usuário."""
    ids = r.smembers(f"categorias_usuario:{uid}")
    cats = []
    for cid in ids:
        c = r.hgetall(f"categoria:{cid}")
        if c:
            # desserializa o ícone de volta para dict
            c["icone"] = json.loads(c.get("icone", "{}"))
            cats.append(c)
    cats.sort(key=lambda x: x.get("nome", ""))
    return cats


def excluir_categoria(r: redis.Redis, uid: str, cid: str) -> bool:
    """Exclui uma categoria."""
    if not r.hexists(f"categoria:{cid}", "id"):
        return False
    r.delete(f"categoria:{cid}")
    r.srem(f"categorias_usuario:{uid}", cid)
    return True


# ────────────────────────────────────────────────────────────
# METAS
# ────────────────────────────────────────────────────────────

def criar_meta(r: redis.Redis, uid: str, nome: str, valor_total: float,
               valor_atual: float = 0.0, data_alvo: str = "",
               descricao: str = "") -> dict:
    """Cria uma meta financeira."""
    mid = _novo_id()
    meta = {
        "id": mid,
        "usuario_id": uid,
        "nome": nome.strip(),
        "valor_total": str(valor_total),
        "valor_atual": str(valor_atual),
        "data_alvo": data_alvo,
        "descricao": descricao.strip(),
        "status": "em_andamento",
        "criado_em": _agora(),
        "atualizado_em": _agora(),
    }

    r.hset(f"meta:{mid}", mapping=meta)
    r.sadd(f"metas_usuario:{uid}", mid)

    return meta


def atualizar_meta(r: redis.Redis, uid: str, mid: str, valor_atual: float) -> bool:
    """Atualiza o valor acumulado de uma meta. Marca como concluída se atingiu o total."""
    meta = r.hgetall(f"meta:{mid}")
    if not meta or meta.get("usuario_id") != uid:
        return False

    total = float(meta.get("valor_total", 0))
    novo_status = "concluida" if valor_atual >= total else "em_andamento"

    r.hset(f"meta:{mid}", mapping={
        "valor_atual": str(valor_atual),
        "status": novo_status,
        "atualizado_em": _agora(),
    })
    return True


def listar_metas(r: redis.Redis, uid: str) -> list:
    """Retorna todas as metas do usuário."""
    ids = r.smembers(f"metas_usuario:{uid}")
    metas = []
    for mid in ids:
        m = r.hgetall(f"meta:{mid}")
        if m:
            metas.append(m)
    metas.sort(key=lambda x: x.get("criado_em", ""), reverse=True)
    return metas


def excluir_meta(r: redis.Redis, uid: str, mid: str) -> bool:
    """Exclui uma meta."""
    if not r.hexists(f"meta:{mid}", "id"):
        return False
    r.delete(f"meta:{mid}")
    r.srem(f"metas_usuario:{uid}", mid)
    return True


# ────────────────────────────────────────────────────────────
# RESUMO / DASHBOARD
# ────────────────────────────────────────────────────────────

def resumo_mensal(r: redis.Redis, uid: str, mes: str) -> dict:
    """
    Calcula receitas, despesas, saldo e gastos por categoria para um mês.
    mes: formato 'YYYY-MM'
    """
    lancamentos = listar_lancamentos(r, uid, mes=mes)

    receitas = sum(float(l["valor"]) for l in lancamentos if float(l["valor"]) > 0)
    despesas = sum(abs(float(l["valor"])) for l in lancamentos if float(l["valor"]) < 0)
    saldo = receitas - despesas

    por_categoria = {}
    for l in lancamentos:
        if float(l["valor"]) < 0:
            cat = l["categoria"]
            por_categoria[cat] = por_categoria.get(cat, 0) + abs(float(l["valor"]))

    return {
        "mes": mes,
        "receitas": round(receitas, 2),
        "despesas": round(despesas, 2),
        "saldo": round(saldo, 2),
        "economia_pct": round((saldo / receitas * 100) if receitas > 0 else 0, 1),
        "por_categoria": por_categoria,
    }


# ────────────────────────────────────────────────────────────
# CONFIGURAÇÕES DO USUÁRIO
# ────────────────────────────────────────────────────────────

def salvar_configuracoes(r: redis.Redis, uid: str, config: dict):
    """Salva preferências do usuário (notificações, moeda, etc)."""
    config["usuario_id"] = uid
    config["atualizado_em"] = _agora()
    r.hset(f"config:{uid}", mapping={k: str(v) for k, v in config.items()})


def obter_configuracoes(r: redis.Redis, uid: str) -> dict:
    """Retorna as configurações do usuário."""
    return r.hgetall(f"config:{uid}")


# ────────────────────────────────────────────────────────────
# SEED - dados de demonstração
# ────────────────────────────────────────────────────────────

def seed_demo(r: redis.Redis):
    """
    Popula o banco com dados de demonstração para teste.
    Só cria se ainda não existir o usuário demo.
    """
    if r.hexists("emails", "lucas@email.com"):
        print("Dados demo já existem. Nada foi alterado.")
        return

    print("Criando dados de demonstração...")

    # usuário demo
    usuario = criar_usuario(r, "Lucas Demo", "lucas@email.com", "123456", role="user")
    uid = r.hget("emails", "lucas@email.com")

    # admin
    criar_usuario(r, "Administrador", "admin@fincontrol.com", "admin123", role="admin")

    # categorias padrão
    icones = {
        "Alimentação": {"id": "cart", "label": "Mercado",  "p": "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C5 16.1 6.9 18 9 18h12v-2H9.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63H19c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0023.46 5H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2z"},
        "Transporte":  {"id": "car",  "label": "Carro",    "p": "M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z"},
        "Moradia":     {"id": "home", "label": "Casa",     "p": "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"},
        "Lazer":       {"id": "game", "label": "Games",    "p": "M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"},
        "Saúde":       {"id": "heart","label": "Coração",  "p": "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"},
        "Trabalho":    {"id": "brief","label": "Trabalho", "p": "M20 6h-2.18c.07-.44.18-.88.18-1.36C18 3.1 16.9 2 15.55 2h-7.1C7.1 2 6 3.1 6 4.64c0 .48.11.92.18 1.36H4C2.9 6 2 6.9 2 8v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"},
    }
    cores = {
        "Alimentação": "#24784F", "Transporte": "#EBC7B3",
        "Moradia": "#D97706",     "Lazer": "#7C3AED",
        "Saúde": "#DC2626",       "Trabalho": "#059669",
    }
    for nome, icone in icones.items():
        criar_categoria(r, uid, nome, icone, cores[nome], padrao=True)

    # lançamentos de exemplo
    lancamentos_demo = [
        ("Supermercado",    320.00, "despesa", "2025-05-08", "Alimentação"),
        ("Salário mensal",  2800.00,"receita", "2025-05-07", "Trabalho"),
        ("Uber",            45.00,  "despesa", "2025-05-08", "Transporte"),
        ("Restaurante",     85.00,  "despesa", "2025-05-07", "Alimentação"),
        ("Freelance Dev",   750.00, "receita", "2025-05-06", "Trabalho"),
        ("Conta de Luz",    120.00, "despesa", "2025-05-08", "Moradia"),
        ("Netflix",         45.00,  "despesa", "2025-05-05", "Lazer"),
        ("Academia",        99.00,  "despesa", "2025-05-04", "Saúde"),
        ("Aluguel",         1200.00,"despesa", "2025-05-03", "Moradia"),
    ]
    for desc, val, tipo, data, cat in lancamentos_demo:
        criar_lancamento(r, uid, desc, val, tipo, data, cat)

    # metas de exemplo
    criar_meta(r, uid, "Reserva de emergência", 3000, 1800,
               "2025-12-31", "Guardar equivalente a 3 salários")
    criar_meta(r, uid, "Viagem internacional", 5000, 2000,
               "2026-06-30", "Europa ou América do Norte")

    print("Seed concluído! Usuário: lucas@email.com / senha: 123456")


# ────────────────────────────────────────────────────────────
# Ponto de entrada para testes rápidos
# ────────────────────────────────────────────────────────────

if __name__ == "__main__":
    try:
        r = conectar()
        print("Conectado ao Redis com sucesso!")

        seed_demo(r)

        # teste de login
        usuario = login(r, "lucas@email.com", "123456")
        if usuario:
            print(f"\nLogin OK: {usuario['nome']} ({usuario['role']})")
            uid = usuario["id"]

            resumo = resumo_mensal(r, uid, "2025-05")
            print(f"\nResumo Mai/2025:")
            print(f"  Receitas : R$ {resumo['receitas']:.2f}")
            print(f"  Despesas : R$ {resumo['despesas']:.2f}")
            print(f"  Saldo    : R$ {resumo['saldo']:.2f}")
            print(f"  Economia : {resumo['economia_pct']}%")
            print(f"  Por cat  : {resumo['por_categoria']}")
        else:
            print("Falha no login!")

    except redis.ConnectionError as e:
        print(f"\nERRO: Não foi possível conectar ao Redis.")
        print(f"Detalhes: {e}")
        print("Siga o guia de configuração no arquivo CONFIGURACAO.md")
