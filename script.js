// ── ICON SETS (inline SVG paths for grid) ──────────────────────
var ICON_SETS = {
  finance:[
    {id:'wallet',label:'Carteira',p:'M21 7.28V5c0-1.1-.9-2-2-2H5C3.89 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2.28A2 2 0 0022 15v-4a2 2 0 00-1-1.72zM20 15h-7v-4h7v4zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h6v2H5z'},
    {id:'cash',label:'Dinheiro',p:'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z'},
    {id:'card',label:'Cartão',p:'M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z'},
    {id:'bank',label:'Banco',p:'M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zM11.5 1L2 6v2h19V6l-9.5-5z'},
    {id:'piggy',label:'Cofrinho',p:'M20.7 10.77l-.46-.41A8.56 8.56 0 0014 8H9A7 7 0 002 15v3h2v2h3v-2h6v2h3v-2h1a2 2 0 002-2v-3.59a2 2 0 00-.3-1.64zM18.73 16H18v2h-1v-2H9v2H8v-2H4v-1a5 5 0 015-5h5a6.58 6.58 0 015.46 3.03zM9 12a1 1 0 110 2 1 1 0 010-2'},
    {id:'chart',label:'Gráfico',p:'M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zM16.2 13h2.8v6h-2.8v-6z'},
    {id:'trend',label:'Tendência',p:'M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z'},
    {id:'receipt',label:'Recibo',p:'M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z'},
    {id:'percent',label:'Percentual',p:'M18.5 3.5l-15 15 1.41 1.41 15-15L18.5 3.5zM7 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z'},
    {id:'safe',label:'Cofre',p:'M18 2H6C4.9 2 4 2.9 4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 15c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'},
    {id:'target',label:'Meta',p:'M12 2a10 10 0 110 20A10 10 0 0112 2zm0 2a8 8 0 100 16A8 8 0 0012 4zm0 3a5 5 0 110 10A5 5 0 0112 7zm0 2a3 3 0 100 6 3 3 0 000-6z'},
    {id:'transfer',label:'Transferência',p:'M16 17V14H13V12H16V9L20 13L16 17M8 7V10H11V12H8V15L4 11L8 7'},
  ],
  casa:[
    {id:'home',label:'Casa',p:'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'},
    {id:'sofa',label:'Sofá',p:'M21 9V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v2c-1.1 0-2 .9-2 2v5h1.33L3 18h1l.67-2h14.67l.66 2h1l.67-2H22v-5c0-1.1-.9-2-2-2zm-8 0H5V7h8v2zm6 0h-4V7h4v2z'},
    {id:'bed',label:'Cama',p:'M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z'},
    {id:'bulb',label:'Luz',p:'M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z'},
    {id:'wifi',label:'WiFi',p:'M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z'},
    {id:'tool',label:'Ferramenta',p:'M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 11.19L19.53 9.16L17 6.61L18.35 5.21L21.37 8.19L20 9.57L22.25 11.8L19.85 14.19L17.5 11.19M4.17 14.53L9.04 9.66L11.5 12.1L6.63 17L4.17 14.53M10 4L3 11L7 15L14 8L10 4Z'},
    {id:'fridge',label:'Geladeira',p:'M18 2.01L6 2c-1.1 0-2 .89-2 2v16c0 1.11.9 2 2 2h12c1.1 0 2-.89 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8V5zm0 7h2v4H8v-4z'},
    {id:'water',label:'Água',p:'M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z'},
    {id:'lock',label:'Cadeado',p:'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z'},
    {id:'gate',label:'Portão',p:'M10 9V7l-2 2-2-2v2H4V4h16v5h-2V7l-2 2-2-2v2h-4zm0 11h4v-5h-4v5zm-6 0h4v-5H4v5zm12 0h4v-5h-4v5z'},
  ],
  food:[
    {id:'cart',label:'Mercado',p:'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C5 16.1 6.9 18 9 18h12v-2H9.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63H19c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0023.46 5H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2z'},
    {id:'food',label:'Comida',p:'M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7H1v-2h15.03v2zm0-4H1v-2h15.03v2z'},
    {id:'coffee',label:'Café',p:'M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z'},
    {id:'cake',label:'Bolo',p:'M12 6c1.11 0 2-.89 2-2 0-.36-.1-.69-.26-.98L12 0l-1.74 3.02c-.16.29-.26.62-.26.98 0 1.11.89 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01z'},
    {id:'beer',label:'Bebida',p:'M20 3H6v10c0 2.21 1.79 4 4 4h4c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z'},
    {id:'leaf',label:'Vegetal',p:'M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20c4 0 4-2 8-2s4 2 8 2v-2c-4 0-4-2-8-2-1.13 0-1.9.16-2.53.33C14.28 12.74 17 10.5 17 8z'},
    {id:'pot',label:'Panela',p:'M21 5H3v2h1.54L8 16.5V19h-.5c-.55 0-1 .45-1 1v1h11v-1c0-.55-.45-1-1-1H16v-2.5L19.46 7H21V5z'},
  ],
  transp:[
    {id:'car',label:'Carro',p:'M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z'},
    {id:'bus',label:'Ônibus',p:'M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z'},
    {id:'train',label:'Metrô',p:'M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2H18v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zm3.5 14.5h-7c-.83 0-1.5-.67-1.5-1.5v-4h10v4c0 .83-.67 1.5-1.5 1.5zM8 11V6h3v5H8zm5 0V6h3v5h-3z'},
    {id:'plane',label:'Avião',p:'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z'},
    {id:'bike',label:'Bicicleta',p:'M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4C7.4 8.8 7 9.4 7 10c0 .6.2 1.2.8 1.6L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z'},
    {id:'gas',label:'Gasolina',p:'M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM18 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM8 18v-4.5H6L10 7v4.5h2L8 18z'},
    {id:'moto',label:'Moto',p:'M19 7c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 10.35V7zM7 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z M19 13c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z'},
  ],
  saude:[
    {id:'heart',label:'Coração',p:'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'},
    {id:'pill',label:'Remédio',p:'M4.22 11.29l6.07-6.07c1.17-1.17 3.07-1.17 4.24 0l6.07 6.07c1.17 1.17 1.17 3.07 0 4.24l-6.07 6.07c-1.17 1.17-3.07 1.17-4.24 0l-6.07-6.07c-1.17-1.17-1.17-3.07 0-4.24zm3.55.71l4.95 4.95 2.83-2.83-4.95-4.95-2.83 2.83z'},
    {id:'hospital',label:'Hospital',p:'M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z M13 9h-2V7h-2v2H7v2h2v2h2v-2h2V9z'},
    {id:'dumbbell',label:'Academia',p:'M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29l-1.43-1.43z'},
    {id:'eye',label:'Ótica',p:'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'},
    {id:'run',label:'Corrida',p:'M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z'},
    {id:'scale',label:'Balança',p:'M17.5 5C15.57 5 14 6.57 14 8.5c0 1.55.99 2.86 2.36 3.36L15 17H9l-1.36-5.14C9.01 11.36 10 10.05 10 8.5 10 6.57 8.43 5 6.5 5S3 6.57 3 8.5c0 1.55.99 2.86 2.36 3.36L7 19h10l1.64-7.14C20.01 11.36 21 10.05 21 8.5 21 6.57 19.43 5 17.5 5z'},
  ],
  lazer:[
    {id:'game',label:'Games',p:'M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z'},
    {id:'movie',label:'Cinema',p:'M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z'},
    {id:'music',label:'Música',p:'M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z'},
    {id:'book',label:'Leitura',p:'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z'},
    {id:'camera',label:'Foto',p:'M12 15.2c-1.77 0-3.2-1.43-3.2-3.2 0-1.77 1.43-3.2 3.2-3.2 1.77 0 3.2 1.43 3.2 3.2 0 1.77-1.43 3.2-3.2 3.2zM9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z'},
    {id:'travel',label:'Viagem',p:'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z'},
    {id:'palette',label:'Arte',p:'M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8z'},
  ],
  work:[
    {id:'brief',label:'Trabalho',p:'M20 6h-2.18c.07-.44.18-.88.18-1.36C18 3.1 16.9 2 15.55 2h-7.1C7.1 2 6 3.1 6 4.64c0 .48.11.92.18 1.36H4C2.9 6 2 6.9 2 8v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7 13H11V11h2v8zm-4 0H7V11h2v8zm8 0h-2V11h2v8zM8 4.64C8 4.29 8.36 4 8.45 4h7.1c.09 0 .45.29.45.64C16 4.99 15.64 6 15.55 6H8.45C8.36 6 8 4.99 8 4.64z'},
    {id:'laptop',label:'Computador',p:'M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z'},
    {id:'phone',label:'Telefone',p:'M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z'},
    {id:'email',label:'E-mail',p:'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'},
    {id:'meeting',label:'Reunião',p:'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z'},
    {id:'clipboard',label:'Relatório',p:'M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z'},
    {id:'calendar',label:'Agenda',p:'M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z'},
    {id:'store',label:'Loja',p:'M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z'},
    {id:'key',label:'Chave',p:'M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z'},
  ],
};

// ── ESTADO GLOBAL ─────────────────────────────────────────────────
// FIX #1: dados demo com datas do mês atual (2026-05)
var lancamentos = [
  {id:1,desc:'Supermercado',cat:'Alimentação',data:'2026-05-08',val:-320,tipo:'despesa'},
  {id:2,desc:'Salário mensal',cat:'Trabalho',data:'2026-05-07',val:2800,tipo:'receita'},
  {id:3,desc:'Uber',cat:'Transporte',data:'2026-05-08',val:-45,tipo:'despesa'},
  {id:4,desc:'Restaurante',cat:'Alimentação',data:'2026-05-07',val:-85,tipo:'despesa'},
  {id:5,desc:'Freelance Dev',cat:'Trabalho',data:'2026-05-06',val:750,tipo:'receita'},
  {id:6,desc:'Conta de Luz',cat:'Moradia',data:'2026-05-08',val:-120,tipo:'despesa'},
  {id:7,desc:'Netflix',cat:'Lazer',data:'2026-05-05',val:-45,tipo:'despesa'},
  {id:8,desc:'Academia',cat:'Saúde',data:'2026-05-04',val:-99,tipo:'despesa'},
  {id:9,desc:'Aluguel',cat:'Moradia',data:'2026-05-03',val:-1200,tipo:'despesa'},
  {id:10,desc:'Dividendos',cat:'Investimentos',data:'2026-05-02',val:250,tipo:'receita'},
  {id:11,desc:'Salário mensal',cat:'Trabalho',data:'2026-04-07',val:2800,tipo:'receita'},
  {id:12,desc:'Aluguel',cat:'Moradia',data:'2026-04-03',val:-1200,tipo:'despesa'},
  {id:13,desc:'Supermercado',cat:'Alimentação',data:'2026-04-10',val:-290,tipo:'despesa'},
  {id:14,desc:'Academia',cat:'Saúde',data:'2026-04-04',val:-99,tipo:'despesa'},
  {id:15,desc:'Uber',cat:'Transporte',data:'2026-04-12',val:-55,tipo:'despesa'},
];
var categorias = [
  {id:1,nome:'Alimentação',icon:{id:'cart',p:'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C5 16.1 6.9 18 9 18h12v-2H9.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63H19c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0023.46 5H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2z',label:'Mercado'},cor:'#24784F'},
  {id:2,nome:'Transporte',icon:{id:'car',p:'M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z',label:'Carro'},cor:'#0891B2'},
  {id:3,nome:'Moradia',icon:{id:'home',p:'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',label:'Casa'},cor:'#D97706'},
  {id:4,nome:'Lazer',icon:{id:'game',p:'M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z',label:'Games'},cor:'#7C3AED'},
  {id:5,nome:'Saúde',icon:{id:'heart',p:'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',label:'Coração'},cor:'#DC2626'},
  {id:6,nome:'Educação',icon:{id:'book',p:'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z',label:'Leitura'},cor:'#0891B2'},
  {id:7,nome:'Trabalho',icon:{id:'brief',p:'M20 6h-2.18c.07-.44.18-.88.18-1.36C18 3.1 16.9 2 15.55 2h-7.1C7.1 2 6 3.1 6 4.64c0 .48.11.92.18 1.36H4C2.9 6 2 6.9 2 8v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7 13H11V11h2v8zm-4 0H7V11h2v8zm8 0h-2V11h2v8zM8 4.64C8 4.29 8.36 4 8.45 4h7.1c.09 0 .45.29.45.64C16 4.99 15.64 6 15.55 6H8.45C8.36 6 8 4.99 8 4.64z',label:'Trabalho'},cor:'#059669'},
  {id:8,nome:'Investimentos',icon:{id:'trend',p:'M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z',label:'Tendência'},cor:'#DB2777'},
];
var metas = [
  {id:1,nome:'Reserva de emergência',total:3000,atual:1800,data:'2026-12-31',desc:'Guardar equivalente a 3 salários'},
  {id:2,nome:'Viagem internacional',total:5000,atual:2000,data:'2026-12-30',desc:'Europa ou América do Norte'},
  {id:3,nome:'Quitar dívidas',total:2500,atual:2000,data:'2026-09-30',desc:'Cartão e empréstimo'},
];
var lType='receita', selIcon=null, selectedColor='#24784F';
// FIX #1: filtro padrão dinâmico — usa o mês atual em vez de data fixa
var fType='todos';
var filterMonth = new Date().toISOString().slice(0,7);
var fQ='';

// ── LOCALSTORAGE DATABASE + AUTH ─────────────────────────────────
var DB_KEY = 'fincontrol_bd_v3';
var currentUser = null;

function clone(obj){ return JSON.parse(JSON.stringify(obj)); }
function defaultDB(){
  return {
    usuarios:[
      {id:1,nome:'Lucas Demo',email:'lucas@email.com',senha:'123456',role:'user',ativo:true,criado_em:new Date().toISOString()},
      {id:2,nome:'Administrador',email:'admin@fincontrol.com',senha:'admin123',role:'admin',ativo:true,criado_em:new Date().toISOString()}
    ],
    categorias: clone(categorias),
    lancamentos: clone(lancamentos),
    metas: clone(metas)
  };
}
function getDB(){
  try{
    var raw = localStorage.getItem(DB_KEY);
    if(!raw){ var seed = defaultDB(); localStorage.setItem(DB_KEY, JSON.stringify(seed)); return seed; }
    return JSON.parse(raw);
  }catch(e){
    var seed = defaultDB();
    localStorage.setItem(DB_KEY, JSON.stringify(seed));
    return seed;
  }
}
function setDB(db){ localStorage.setItem(DB_KEY, JSON.stringify(db)); }
function loadUserData(){
  var db = getDB();
  categorias = db.categorias && db.categorias.length ? db.categorias : clone(defaultDB().categorias);
  lancamentos = db.lancamentos || [];
  metas = db.metas || [];
}
function persistDB(){
  var db = getDB();
  db.categorias = categorias;
  db.lancamentos = lancamentos;
  db.metas = metas;
  setDB(db);
}
function finishAuth(user){
  currentUser = user;
  localStorage.setItem('fincontrol_current_user', JSON.stringify(user));
  loadUserData();
  document.getElementById('authWrap').style.display='none';
  document.getElementById('appWrap').style.display='block';
  if(document.getElementById('lData')) document.getElementById('lData').value=new Date().toISOString().split('T')[0];

  // Atualiza nome/avatar no sidebar
  var av = document.getElementById('sbAvatar');
  var nm = document.getElementById('sbNome');
  var rl = document.getElementById('sbRole');
  if(av && user.nome) av.textContent = user.nome.split(' ').map(function(w){return w[0]}).slice(0,2).join('').toUpperCase();
  if(nm) nm.textContent = user.nome || '';
  if(rl) rl.textContent = user.role === 'admin' ? 'Administrador' : 'Usuário padrão';

  renderAll();
  var iconTab = document.querySelector('.ist');
  if(iconTab) loadSet('finance', iconTab);
  toast('Login realizado com sucesso!','ok');
}
function doLogin(){
  var email = (document.getElementById('loginEmail')?.value || '').trim().toLowerCase();
  var senha = document.getElementById('loginPass')?.value || '';
  var db = getDB();
  var user = db.usuarios.find(function(u){return u.email.toLowerCase()===email && u.senha===senha && u.ativo!==false;});
  if(!user){ toast('E-mail ou senha inválidos.','err'); return; }
  finishAuth(user);
}
function doRegister(){
  var nome = (document.getElementById('regName')?.value || '').trim();
  var email = (document.getElementById('regEmail')?.value || '').trim().toLowerCase();
  var p1 = document.getElementById('regP1')?.value || '';
  var p2 = document.getElementById('regP2')?.value || '';
  var terms = document.getElementById('terms')?.checked;
  if(!nome || !email || !p1 || !p2){ toast('Preencha todos os campos do cadastro.','err'); return; }
  if(!email.includes('@') || !email.includes('.')){ toast('Informe um e-mail válido.','err'); return; }
  if(p1.length < 6){ toast('A senha deve ter pelo menos 6 caracteres.','err'); return; }
  if(p1 !== p2){ toast('As senhas não conferem.','err'); return; }
  if(!terms){ toast('Você precisa aceitar os termos para continuar.','err'); return; }
  var db = getDB();
  if(db.usuarios.some(function(u){return u.email.toLowerCase()===email;})){ toast('Este e-mail já está cadastrado.','err'); return; }
  var user = {id:Date.now(), nome:nome, email:email, senha:p1, role:'user', ativo:true, criado_em:new Date().toISOString()};
  db.usuarios.push(user);
  setDB(db);
  finishAuth(user);
}
function logout(){
  localStorage.removeItem('fincontrol_current_user');
  currentUser=null;
  document.getElementById('appWrap').style.display='none';
  document.getElementById('authWrap').style.display='flex';
}
function switchAuth(m){document.getElementById('loginForm').style.display=m==='login'?'block':'none';document.getElementById('regForm').style.display=m==='reg'?'block':'none';}

// FIX #3: Google login exibe mensagem clara em vez de tentar login com campos vazios
function googleLoginDemo(){
  toast('Login com Google não está disponível nesta versão de demonstração.','');
}

window.addEventListener('DOMContentLoaded', function(){
  getDB();
  try{
    var saved = JSON.parse(localStorage.getItem('fincontrol_current_user') || 'null');
    if(saved && saved.email) finishAuth(saved);
  }catch(e){}
});

// ── NAVEGAÇÃO ─────────────────────────────────────────────────────
// FIX #2: subtítulo do dashboard usa data atual
function getMesAtualLabel(){
  return new Date().toLocaleDateString('pt-BR',{month:'long',year:'numeric'})
    .replace(/^./, function(c){ return c.toUpperCase(); });
}
var pageMeta={
  dashboard:{t:'Dashboard',s:'Resumo financeiro · '+getMesAtualLabel()},
  lancamentos:{t:'Lançamentos',s:'Histórico completo'},
  categorias:{t:'Categorias',s:'Gerenciar categorias'},
  metas:{t:'Metas Financeiras',s:'Acompanhe seus objetivos'},
  alertas:{t:'Alertas',s:'Notificações e avisos'},
  perfil:{t:'Meu Perfil',s:'Dados e configurações'},
  admin:{t:'Administração',s:'Área restrita'}
};

function showPage(p){
  document.querySelectorAll('.page').forEach(function(e){e.classList.remove('active')});
  document.querySelectorAll('.nav-item').forEach(function(e){e.classList.remove('active');e.removeAttribute('aria-current')});
  document.getElementById('page-'+p).classList.add('active');
  var n=document.getElementById('nav-'+p);
  if(n){n.classList.add('active');n.setAttribute('aria-current','page');}
  var m=pageMeta[p]||{t:p,s:''};
  document.getElementById('pageTitle').textContent=m.t;
  document.getElementById('pageSub').textContent=m.s;
  // FIX #13: esconde botão "Novo lançamento" em páginas irrelevantes
  var addBtn = document.getElementById('addBtn');
  if(addBtn){
    var mostrarBtn = (p==='dashboard'||p==='lancamentos');
    addBtn.style.display = mostrarBtn ? '' : 'none';
  }
  closeSidebar();
}
function toggleSidebar(){
  var s=document.getElementById('sidebar'),o=document.getElementById('sideOverlay'),b=document.getElementById('menuBtn');
  var open=s.classList.toggle('open');
  o.classList.toggle('open',open);
  b.setAttribute('aria-expanded',open?'true':'false');
}
function closeSidebar(){
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sideOverlay').classList.remove('open');
  document.getElementById('menuBtn').setAttribute('aria-expanded','false');
}

// ── RENDER ALL ────────────────────────────────────────────────────
function renderAll(){ renderLanc(); renderCat(); renderMetas(); atualizarCards(); atualizarSelectMes(); updateCatSel(); }

// ── ICON SVG helper ───────────────────────────────────────────────
function icoSvg(p,size,color){size=size||20;color=color||'currentColor';return'<svg viewBox="0 0 24 24" width="'+size+'" height="'+size+'" fill="'+color+'"><path d="'+p+'"/></svg>';}

// ── FIX #5: CARDS DO DASHBOARD DINÂMICOS ─────────────────────────
function atualizarCards(){
  var mes = new Date().toISOString().slice(0,7);
  var lancMes = lancamentos.filter(function(l){ return l.data.startsWith(mes); });
  var inc = lancMes.filter(function(l){ return l.val > 0; }).reduce(function(s,l){ return s+l.val; },0);
  var exp = lancMes.filter(function(l){ return l.val < 0; }).reduce(function(s,l){ return s+Math.abs(l.val); },0);
  var saldo = inc - exp;
  var pct = inc > 0 ? ((saldo/inc)*100).toFixed(1) : '0,0';

  var elSaldo = document.getElementById('cardSaldo');
  var elInc   = document.getElementById('cardReceita');
  var elExp   = document.getElementById('cardDespesa');
  var elPct   = document.getElementById('cardEconomia');
  var elEcoMeta = document.getElementById('cardEconomiaMeta');

  if(elSaldo) elSaldo.textContent = 'R$ '+fmtBRL(saldo);
  if(elInc)   elInc.textContent   = 'R$ '+fmtBRL(inc);
  if(elExp)   elExp.textContent   = 'R$ '+fmtBRL(exp);
  if(elPct)   elPct.textContent   = pct.replace('.',',')+'%';
  if(elEcoMeta) elEcoMeta.textContent = 'R$ '+fmtBRL(saldo)+' guardados';

  // Atualiza badges de variação (comparação com mês anterior)
  var mesAnterior = new Date(new Date().setMonth(new Date().getMonth()-1)).toISOString().slice(0,7);
  var lancAnt = lancamentos.filter(function(l){ return l.data.startsWith(mesAnterior); });
  var incAnt = lancAnt.filter(function(l){ return l.val>0; }).reduce(function(s,l){ return s+l.val; },0);
  var expAnt = lancAnt.filter(function(l){ return l.val<0; }).reduce(function(s,l){ return s+Math.abs(l.val); },0);

  var bdgInc = document.getElementById('badgeReceita');
  var bdgExp = document.getElementById('badgeDespesa');
  if(bdgInc && incAnt > 0){
    var vInc = (((inc-incAnt)/incAnt)*100).toFixed(0);
    bdgInc.className = 'sc-badge '+(vInc>=0?'up':'dn');
    bdgInc.innerHTML = icoSvg(vInc>=0?'M7 14l5-5 5 5z':'M7 10l5 5 5-5z',11)+(vInc>=0?'+':'')+vInc+'% vs mês anterior';
  }
  if(bdgExp && expAnt > 0){
    var vExp = (((exp-expAnt)/expAnt)*100).toFixed(0);
    bdgExp.className = 'sc-badge '+(vExp<=0?'up':'dn');
    bdgExp.innerHTML = icoSvg(vExp<=0?'M7 14l5-5 5 5z':'M7 10l5 5 5-5z',11)+(vExp>=0?'+':'')+vExp+'% vs mês anterior';
  }
}

// ── FIX #7: SELECT DE MESES DINÂMICO ─────────────────────────────
function atualizarSelectMes(){
  var meses = [];
  lancamentos.forEach(function(l){
    var m = l.data.slice(0,7);
    if(meses.indexOf(m) === -1) meses.push(m);
  });
  meses.sort().reverse();

  var sel = document.getElementById('selectMes');
  if(!sel) return;
  var cur = sel.value || filterMonth;
  sel.innerHTML = '<option value="">Todos os meses</option>' +
    meses.map(function(m){
      var d = new Date(m+'-01T12:00:00');
      var label = d.toLocaleDateString('pt-BR',{month:'long',year:'numeric'});
      label = label.charAt(0).toUpperCase() + label.slice(1);
      return '<option value="'+m+'"'+(m===cur?' selected':'')+'>'+label+'</option>';
    }).join('');
}

// ── LANÇAMENTOS ───────────────────────────────────────────────────
function setLT(t){lType=t;document.getElementById('btnR').classList.toggle('active',t==='receita');document.getElementById('btnD').classList.toggle('active',t==='despesa');}
function fLanc(t,btn){fType=t;document.querySelectorAll('.tg .tb').forEach(function(b){b.classList.remove('active')});btn.classList.add('active');renderLanc();}
function setFMonth(v){filterMonth=v;renderLanc();}
function fSearch(v){fQ=v.toLowerCase();renderLanc();}

function getCat(name){ return categorias.find(function(c){return c.nome===name})||{icon:{p:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',label:''},cor:'#8796AA'}; }

function renderLanc(){
  var data=lancamentos.filter(function(l){
    if(fType!=='todos'&&l.tipo!==fType)return false;
    if(filterMonth&&!l.data.startsWith(filterMonth))return false;
    if(fQ&&!l.desc.toLowerCase().includes(fQ)&&!l.cat.toLowerCase().includes(fQ))return false;
    return true;
  });
  // pills de resumo
  var inc=data.filter(function(l){return l.val>0}).reduce(function(s,l){return s+l.val},0);
  var exp=data.filter(function(l){return l.val<0}).reduce(function(s,l){return s+Math.abs(l.val)},0);
  document.getElementById('lancPills').innerHTML=
    '<div class="spill sp-in">'+icoSvg('M7 14l5-5 5 5z',14)+'Receitas: R$ '+fmtBRL(inc)+'</div>'+
    '<div class="spill sp-out">'+icoSvg('M7 10l5 5 5-5z',14)+'Despesas: R$ '+fmtBRL(exp)+'</div>';

  var empty=document.getElementById('lancEmpty');
  if(!data.length){document.getElementById('lancBody').innerHTML='';empty.style.display='block';return;}
  empty.style.display='none';
  document.getElementById('lancBody').innerHTML=data.map(function(l){
    var c=getCat(l.cat);var bg=c.cor+'22';
    var fv=Math.abs(l.val);var cls=l.val>0?'amt-in':'amt-out';var sign=l.val>0?'+':'−';
    var badge=l.val>0?'<span class="badge b-g">Receita</span>':'<span class="badge b-r">Despesa</span>';
    var dt=new Date(l.data+'T12:00:00').toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit',year:'2-digit'});
    return '<tr><td><div class="tx-row"><div class="tx-ico" style="background:'+bg+'">'+icoSvg(c.icon.p,18,c.cor)+'</div><div><div class="tx-n">'+l.desc+'</div><div class="tx-c">'+l.cat+'</div></div></div></td><td style="color:var(--t2)">'+l.cat+'</td><td style="color:var(--t2)">'+dt+'</td><td>'+badge+'</td><td class="'+cls+'" style="text-align:right">'+sign+'R$ '+fmtBRL(fv)+'</td><td><div class="actions" style="justify-content:center"><button class="btn btn-d btn-sm" onclick="delLanc('+l.id+')" aria-label="Excluir '+l.desc+'">'+icoSvg('M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z',13)+' Excluir</button></div></td></tr>';
  }).join('');
  // tabela do dashboard (últimos 6 do mês atual)
  var mesAtual = new Date().toISOString().slice(0,7);
  var recentes = lancamentos.filter(function(l){ return l.data.startsWith(mesAtual); }).slice(0,6);
  document.getElementById('dashTx').innerHTML=recentes.map(function(l){
    var c=getCat(l.cat);var bg=c.cor+'22';
    var fv=Math.abs(l.val);var cls=l.val>0?'amt-in':'amt-out';var sign=l.val>0?'+':'−';
    var badge=l.val>0?'<span class="badge b-g">Receita</span>':'<span class="badge b-r">Despesa</span>';
    var dt=new Date(l.data+'T12:00:00').toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit'});
    return '<tr><td><div class="tx-row"><div class="tx-ico" style="background:'+bg+'">'+icoSvg(c.icon.p,18,c.cor)+'</div><div class="tx-n">'+l.desc+'</div></div></td><td style="color:var(--t2)">'+l.cat+'</td><td style="color:var(--t2)">'+dt+'</td><td>'+badge+'</td><td class="'+cls+'" style="text-align:right">'+sign+'R$ '+fmtBRL(fv)+'</td></tr>';
  }).join('');
}

function saveLanc(){
  var desc=document.getElementById('lDesc').value.trim();
  var val=parseFloat(document.getElementById('lVal').value);
  var data=document.getElementById('lData').value;
  var cat=document.getElementById('lCat').value;
  if(!desc||!val||!data||!cat){toast('Preencha todos os campos obrigatórios.','err');return;}
  var fv=lType==='despesa'?-Math.abs(val):Math.abs(val);
  lancamentos.unshift({id:Date.now(),desc:desc,cat:cat,data:data,val:fv,tipo:lType});
  persistDB(); renderAll(); closeModal('mLanc');
  ['lDesc','lVal','lObs'].forEach(function(id){document.getElementById(id).value='';});
  document.getElementById('lCat').value='';
  toast('Lançamento salvo!','ok');
}
function delLanc(id){lancamentos=lancamentos.filter(function(l){return l.id!==id;});persistDB();renderAll();toast('Lançamento excluído.','');}

// ── CATEGORIAS ────────────────────────────────────────────────────
function renderCat(){
  var empty=document.getElementById('catEmpty');
  if(!categorias.length){document.getElementById('catBody').innerHTML='';empty.style.display='block';return;}
  empty.style.display='none';
  document.getElementById('catBody').innerHTML=categorias.map(function(c){
    var count=lancamentos.filter(function(l){return l.cat===c.nome}).length;
    return '<tr><td><div class="tx-ico" style="background:'+c.cor+'22;width:34px;height:34px;border-radius:8px">'+icoSvg(c.icon.p,18,c.cor)+'</div></td><td style="font-weight:600">'+c.nome+'</td><td><div style="width:20px;height:20px;border-radius:50%;background:'+c.cor+';border:2px solid rgba(0,0,0,.1)"></div></td><td style="color:var(--t2)">'+count+' lançamento'+(count!==1?'s':'')+'</td><td><div class="actions" style="justify-content:center"><button class="btn btn-o btn-sm" onclick="editCat('+c.id+')" aria-label="Editar '+c.nome+'">'+icoSvg('M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',13)+' Editar</button><button class="btn btn-d btn-sm" onclick="delCat('+c.id+')" aria-label="Excluir '+c.nome+'">'+icoSvg('M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z',13)+' Excluir</button></div></td></tr>';
  }).join('');
  updateCatSel();
}

// FIX #4: editCat agora abre o modal preenchido
function editCat(id){
  var cat = categorias.find(function(c){ return c.id === id; });
  if(!cat) return;
  document.getElementById('cNome').value = cat.nome;
  selectedColor = cat.cor;
  selIcon = cat.icon;
  // marca a cor visualmente
  document.querySelectorAll('.csw').forEach(function(s){ s.classList.remove('sel'); });
  var btnCor = document.querySelector('.csw[data-cor="'+cat.cor+'"]');
  if(btnCor) btnCor.classList.add('sel');
  // preview do ícone
  document.getElementById('ipIcoPreview').innerHTML = icoSvg(cat.icon.p, 20, cat.cor);
  document.getElementById('ipName').textContent = cat.icon.label + ' ('+cat.icon.id+')';
  // guarda o id para sobrescrever ao salvar
  document.getElementById('mCat').dataset.editId = id;
  document.getElementById('mCatT').textContent = 'Editar categoria';
  openModal('mCat');
}

function saveCat(){
  var nome=document.getElementById('cNome').value.trim();
  if(!nome){toast('Informe o nome da categoria.','err');return;}
  if(!selIcon){toast('Selecione um ícone.','err');return;}
  var editId = document.getElementById('mCat').dataset.editId;
  if(editId){
    // modo edição
    var idx = categorias.findIndex(function(c){ return String(c.id) === String(editId); });
    if(idx !== -1){ categorias[idx] = {id:categorias[idx].id, nome:nome, icon:selIcon, cor:selectedColor}; }
    delete document.getElementById('mCat').dataset.editId;
    toast('Categoria "'+nome+'" atualizada!','ok');
  } else {
    categorias.push({id:Date.now(),nome:nome,icon:selIcon,cor:selectedColor});
    toast('Categoria "'+nome+'" criada!','ok');
  }
  persistDB(); renderCat(); closeModal('mCat');
  document.getElementById('cNome').value = '';
  document.getElementById('mCatT').textContent = 'Nova categoria';
}

function delCat(id){
  var cat = categorias.find(function(c){ return c.id === id; });
  var emUso = lancamentos.some(function(l){ return cat && l.cat === cat.nome; });
  if(emUso){ toast('Categoria em uso — remova os lançamentos primeiro.','err'); return; }
  categorias=categorias.filter(function(c){return c.id!==id;});
  persistDB();renderCat();toast('Categoria excluída.','');
}
function updateCatSel(){
  var s=document.getElementById('lCat'),cur=s.value;
  s.innerHTML='<option value="">Selecione uma categoria...</option>'+categorias.map(function(c){return'<option value="'+c.nome+'"'+(c.nome===cur?' selected':'')+'>'+c.nome+'</option>';}).join('');
}

// ── ICON PICKER ───────────────────────────────────────────────────
function loadSet(setName,btn){
  document.querySelectorAll('.ist').forEach(function(t){t.classList.remove('active')});
  btn.classList.add('active');
  document.getElementById('iSearch').value='';
  renderIconGrid(ICON_SETS[setName]||[]);
}
function searchIcon(q){
  if(!q.trim()){
    var activeTab = document.querySelector('.ist.active');
    if(activeTab){
      var match = activeTab.getAttribute('onclick').match(/'([^']+)'/);
      if(match) loadSet(match[1], activeTab);
    }
    return;
  }
  q=q.toLowerCase();
  var all=[];Object.values(ICON_SETS).forEach(function(s){all=all.concat(s);});
  var unique=all.filter(function(v,i,a){return a.findIndex(function(x){return x.id===v.id})===i;});
  renderIconGrid(unique.filter(function(ic){return ic.id.includes(q)||ic.label.toLowerCase().includes(q);}));
}
function renderIconGrid(icons){
  var grid=document.getElementById('iconGrid');
  grid.innerHTML=icons.map(function(ic){
    var isSel=selIcon&&selIcon.id===ic.id;
    return '<div class="io'+(isSel?' sel':'') +'" onclick="pickIcon(this,\''+ic.id+'\',\''+ic.p.replace(/'/g,"\\'")+'\',\''+ic.label+'\')" role="option" aria-selected="'+(isSel?'true':'false')+'" title="'+ic.label+'">'+icoSvg(ic.p,20,'#4A5568')+'</div>';
  }).join('');
}
function pickIcon(el,id,p,label){
  selIcon={id:id,p:p,label:label};
  document.querySelectorAll('.io').forEach(function(o){o.classList.remove('sel');o.setAttribute('aria-selected','false');});
  el.classList.add('sel');el.setAttribute('aria-selected','true');
  document.getElementById('ipIcoPreview').innerHTML=icoSvg(p,20,selectedColor);
  document.getElementById('ipName').textContent=label+' ('+id+')';
}
function setColor(el,c){
  selectedColor=c;
  document.querySelectorAll('.csw').forEach(function(s){s.classList.remove('sel');});
  el.classList.add('sel');
  if(selIcon)document.getElementById('ipIcoPreview').innerHTML=icoSvg(selIcon.p,20,c);
}

// ── METAS ─────────────────────────────────────────────────────────
function renderMetas(){
  var empty=document.getElementById('metasEmpty'),grid=document.getElementById('metasGrid');
  if(!metas.length){grid.innerHTML='';empty.style.display='block';return;}
  empty.style.display='none';
  grid.innerHTML=metas.map(function(m){
    var pct=Math.min(100,Math.round((m.atual/m.total)*100));
    var fc=pct>=100?'danger':pct>=60?'warn':'';
    var pc=pct>=100?'var(--red)':pct>=60?'var(--amber)':'var(--gm)';
    var dateStr=m.data?' · Até '+new Date(m.data+'T12:00:00').toLocaleDateString('pt-BR'):'';
    return '<div class="gc"><div class="gc-top"><div style="flex:1"><div class="gc-name">'+m.nome+'</div><div class="gc-amounts">R$ '+fmtBRL(m.atual)+' de R$ '+fmtBRL(m.total)+dateStr+'</div></div><div class="gc-pct" style="color:'+pc+'">'+pct+'%</div></div>'+(m.desc?'<div class="gc-desc">'+m.desc+'</div>':'')+'<div class="prog-track" role="progressbar" aria-valuenow="'+pct+'" aria-valuemin="0" aria-valuemax="100" aria-label="Progresso '+pct+'%"><div class="prog-fill '+fc+'" style="width:'+pct+'%"></div></div><div class="gc-actions actions" style="margin-top:12px"><button class="btn btn-o btn-sm" onclick="editMeta('+m.id+')" aria-label="Editar '+m.nome+'">'+icoSvg('M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',13)+' Editar</button><button class="btn btn-d btn-sm" onclick="delMeta('+m.id+')" aria-label="Excluir '+m.nome+'">'+icoSvg('M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z',13)+' Excluir</button></div></div>';
  }).join('');
}

// FIX #4: editMeta abre modal preenchido
function editMeta(id){
  var meta = metas.find(function(m){ return m.id === id; });
  if(!meta) return;
  document.getElementById('mNome').value  = meta.nome;
  document.getElementById('mTotal').value = meta.total;
  document.getElementById('mAtual').value = meta.atual;
  document.getElementById('mData').value  = meta.data || '';
  document.getElementById('mDesc').value  = meta.desc || '';
  document.getElementById('mMeta').dataset.editId = id;
  document.getElementById('mMetaT').textContent = 'Editar meta';
  openModal('mMeta');
}

function saveMeta(){
  var nome=document.getElementById('mNome').value.trim();
  var total=parseFloat(document.getElementById('mTotal').value)||0;
  var atual=parseFloat(document.getElementById('mAtual').value)||0;
  if(!nome||!total){toast('Preencha nome e valor total.','err');return;}
  var editId = document.getElementById('mMeta').dataset.editId;
  if(editId){
    var idx = metas.findIndex(function(m){ return String(m.id) === String(editId); });
    if(idx !== -1){
      metas[idx] = {id:metas[idx].id, nome:nome, total:total, atual:atual,
        data:document.getElementById('mData').value,
        desc:document.getElementById('mDesc').value.trim()};
    }
    delete document.getElementById('mMeta').dataset.editId;
    toast('Meta atualizada!','ok');
  } else {
    metas.push({id:Date.now(),nome:nome,total:total,atual:atual,
      data:document.getElementById('mData').value,
      desc:document.getElementById('mDesc').value.trim()});
    toast('Meta criada!','ok');
  }
  persistDB(); renderMetas(); closeModal('mMeta');
  document.getElementById('mMetaT').textContent = 'Nova meta';
  ['mNome','mTotal','mAtual','mData','mDesc'].forEach(function(id){document.getElementById(id).value='';});
}

function delMeta(id){metas=metas.filter(function(m){return m.id!==id;});persistDB();renderMetas();toast('Meta excluída.','');}

function markRead(){
  document.querySelectorAll('.notif-dot2').forEach(function(el){el.remove()});
  var nb=document.getElementById('alertBadge');if(nb)nb.style.display='none';
  document.getElementById('alertCountBadge').textContent='0 novos';
  document.getElementById('notifDot').style.display='none';
  toast('Todos os alertas marcados como lidos.','ok');
}

// ── MODAIS ────────────────────────────────────────────────────────
function openModal(id){
  document.getElementById(id).classList.add('open');
  var modal = document.getElementById(id).querySelector('.modal');
  modal.setAttribute('tabindex','-1');
  modal.focus();
}
function closeModal(id){document.getElementById(id).classList.remove('open');}
function bdClose(e,id){if(e.target.id===id)closeModal(id);}
document.addEventListener('keydown',function(e){
  if(e.key==='Escape') document.querySelectorAll('.modal-bd.open').forEach(function(m){m.classList.remove('open');});
});

// ── TOAST ─────────────────────────────────────────────────────────
var toastIcons={
  ok:'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z',
  err:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
  '':'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'
};
function toast(msg,type){
  var c=document.getElementById('toastC');
  var t=document.createElement('div');
  t.className='toast'+(type?' '+type:'');
  t.innerHTML=icoSvg(toastIcons[type]||toastIcons[''],16,'#fff')+msg;
  c.appendChild(t);
  requestAnimationFrame(function(){requestAnimationFrame(function(){t.classList.add('show');});});
  setTimeout(function(){t.classList.remove('show');setTimeout(function(){if(c.contains(t))c.removeChild(t);},350);},3200);
}

// ── UTIL ──────────────────────────────────────────────────────────
function fmtBRL(v){ return Number(v).toLocaleString('pt-BR',{minimumFractionDigits:2}); }
