'use client'

import { useState } from 'react'

const proyectos = [
  {
    nombre: "Cocina Hispania",
    categoria: "Remodelación de cocina",
    imagenes: [
      "/images/cocina-hispania/20250206_131647.jpg",
      "/images/cocina-hispania/20250206_131652.jpg",
      "/images/cocina-hispania/20250206_131717.jpg"
    ]
  },
    {
    nombre: "Divisiones de Cristal Oficinas",
    categoria: "Obra comercial",
    imagenes: [
      "/images/divisiones-cristal-oficinas/divisiones-cristal-oficinas.jpg"
    ]
  },
    {
    nombre: "Lobby Clínica",
    categoria: "Obra comercial",
    imagenes: [
      "/images/lobby-clinica/IMG_20190831_182104.jpg",
      "/images/lobby-clinica/IMG_20190831_182112.jpg",
      "/images/lobby-clinica/IMG_20190831_182129.jpg",
      "/images/lobby-clinica/IMG_20190831_182159.jpg",
      "/images/lobby-clinica/IMG_20190831_182320.jpg",
      "/images/lobby-clinica/IMG_20190831_182333.jpg",
      "/images/lobby-clinica/IMG_20190831_182348.jpg",
      "/images/lobby-clinica/IMG_20190831_182755.jpg",
      "/images/lobby-clinica/IMG_20190831_182804.jpg",
      "/images/lobby-clinica/IMG_20190831_182812.jpg",
      "/images/lobby-clinica/IMG-20190831-WA0017.jpeg"
    ]
  },
    {
    nombre: "Lobby Piantini",
    categoria: "Obra comercial",
    imagenes: [
      "/images/lobby-piantini/20221020_170838509.jpg",
      "/images/lobby-piantini/20221020_170844237.jpg",
      "/images/lobby-piantini/20221020_170953454.jpg",
      "/images/lobby-piantini/20221020_170958436.jpg",
      "/images/lobby-piantini/20221020_171025190.jpg",
      "/images/lobby-piantini/20221020_171026898.jpg",
      "/images/lobby-piantini/20221020_171043638.jpg",
      "/images/lobby-piantini/20221020_171059932.jpg",
      "/images/lobby-piantini/20221020_171406624.jpg",
      "/images/lobby-piantini/20221020_171446322.jpg",
      "/images/lobby-piantini/20221020_171448552.jpg",
      "/images/lobby-piantini/20221020_171450914.jpg",
      "/images/lobby-piantini/20221025_122357.jpg",
      "/images/lobby-piantini/20221025_123505.jpg",
      "/images/lobby-piantini/20221025_123907.jpg",
      "/images/lobby-piantini/20221025_123917.jpg",
      "/images/lobby-piantini/20221025_123930.jpg",
      "/images/lobby-piantini/20221025_123936.jpg",
      "/images/lobby-piantini/20221025_130239.jpg",
      "/images/lobby-piantini/20221025_130243.jpg"
    ]
  },
    {
    nombre: "Baño Próximo Carrefour",
    categoria: "Remodelación de baño",
    imagenes: [
      "/images/bano-proximo-carrefur/20240611_181808.jpg",
      "/images/bano-proximo-carrefur/20240611_181843.jpg",
      "/images/bano-proximo-carrefur/20240611_181848.jpg",
      "/images/bano-proximo-carrefur/20240611_181858.jpg",
      "/images/bano-proximo-carrefur/20240611_181901.jpg",
      "/images/bano-proximo-carrefur/20240611_182038.jpg",
      "/images/bano-proximo-carrefur/20240611_182049.jpg",
      "/images/bano-proximo-carrefur/20240611_182053.jpg",
      "/images/bano-proximo-carrefur/20240611_182057.jpg",
      "/images/bano-proximo-carrefur/20240611_182101.jpg",
      "/images/bano-proximo-carrefur/20240611_182103.jpg",
      "/images/bano-proximo-carrefur/20240611_182109.jpg"
    ]
  },
    {
    nombre: "Baños Arroyo Hondo",
    categoria: "Remodelación de baño",
    imagenes: [
      "/images/banos-arroyo-hondo/20250620_174204.jpg",
      "/images/banos-arroyo-hondo/20250620_174304.jpg"
    ]
  },
    {
    nombre: "Baños Profamilia",
    categoria: "Remodelación de baño",
    imagenes: [
      "/images/banos-profamilia/IMG_20190705_155542.jpg",
      "/images/banos-profamilia/IMG_20190705_155546.jpg",
      "/images/banos-profamilia/IMG_20190705_155621.jpg",
      "/images/banos-profamilia/IMG_20190705_155631.jpg",
      "/images/banos-profamilia/IMG_20190705_155721.jpg",
      "/images/banos-profamilia/IMG_20190705_155725.jpg",
      "/images/banos-profamilia/IMG_20190705_155735.jpg"
    ]
  },
    {
    nombre: "Baño Torre Romanza",
    categoria: "Remodelación de baño",
    imagenes: [
      "/images/bano-torre-romanza/Foto0509.jpg",
      "/images/bano-torre-romanza/Foto0516(1).jpg",
      "/images/bano-torre-romanza/Foto0517(1).jpg",
      "/images/bano-torre-romanza/Foto0518.jpg",
      "/images/bano-torre-romanza/Foto0519.jpg",
      "/images/bano-torre-romanza/Foto0524.jpg",
      "/images/bano-torre-romanza/Foto0586.jpg",
      "/images/bano-torre-romanza/Foto0588.jpg",
      "/images/bano-torre-romanza/Foto0590(1).jpg",
      "/images/bano-torre-romanza/Foto0590.jpg",
      "/images/bano-torre-romanza/Foto0591.jpg",
      "/images/bano-torre-romanza/Foto0592.jpg",
      "/images/bano-torre-romanza/Foto0593.jpg"
    ]
  },
    {
    nombre: "Cocina Próximo Carrefour",
    categoria: "Remodelación de cocina",
    imagenes: [
      "/images/cocina-proximocarrefur/IMG_20210607_122706.jpg",
      "/images/cocina-proximocarrefur/IMG_20210607_122715.jpg",
      "/images/cocina-proximocarrefur/IMG_20210607_122720.jpg",
      "/images/cocina-proximocarrefur/IMG_20210607_122726.jpg",
      "/images/cocina-proximocarrefur/IMG_20210607_122738.jpg",
      "/images/cocina-proximocarrefur/IMG_20210607_122742.jpg",
      "/images/cocina-proximocarrefur/IMG_20210609_124148.jpg",
      "/images/cocina-proximocarrefur/IMG_20210609_124153.jpg",
      "/images/cocina-proximocarrefur/IMG_20210609_124322.jpg",
      "/images/cocina-proximocarrefur/IMG_20210609_124340.jpg",
      "/images/cocina-proximocarrefur/IMG_20210609_144247.jpg",
      "/images/cocina-proximocarrefur/IMG_20210520_WA0047.jpg",
      "/images/cocina-proximocarrefur/IMG_20210601_WA0029.jpeg",
      "/images/cocina-proximocarrefur/IMG_20210601_WA0031.jpeg",
      "/images/cocina-proximocarrefur/IMG_20210609_WA0020.jpeg"
    ]
  },
    {
    nombre: "Cocina Torre Romanza (Primera Remodelación)",
    categoria: "Remodelación de cocina",
    imagenes: [
      "/images/cocina-torre-romanza-primera-remodelacion/ESTADO%20ANTERIOR.jpg",
      "/images/cocina-torre-romanza-primera-remodelacion/IMG_20150807_152651.jpg",
      "/images/cocina-torre-romanza-primera-remodelacion/IMG_20150807_200620.jpg",
      "/images/cocina-torre-romanza-primera-remodelacion/IMG_20150807_200737.jpg",
      "/images/cocina-torre-romanza-primera-remodelacion/IMG_20150818_192532.jpg",
      "/images/cocina-torre-romanza-primera-remodelacion/IMG_20150818_192544.jpg",
      "/images/cocina-torre-romanza-primera-remodelacion/IMG_20150824_122623.jpg",
      "/images/cocina-torre-romanza-primera-remodelacion/IMG_20150824_122634.jpg",
      "/images/cocina-torre-romanza-primera-remodelacion/IMG_20150824_122738.jpg",
      "/images/cocina-torre-romanza-primera-remodelacion/IMG_20150824_122802.jpg",
      "/images/cocina-torre-romanza-primera-remodelacion/IMG_20150824_173958.jpg",
      "/images/cocina-torre-romanza-primera-remodelacion/IMG_20150824_174351.jpg",
      "/images/cocina-torre-romanza-primera-remodelacion/IMG_20150824_174359.jpg",
      "/images/cocina-torre-romanza-primera-remodelacion/IMG_20150824_174416.jpg",
      "/images/cocina-torre-romanza-primera-remodelacion/IMG_20150824_174428.jpg",
      "/images/cocina-torre-romanza-primera-remodelacion/IMG_20150824_174441.jpg",
      "/images/cocina-torre-romanza-primera-remodelacion/IMG_20150824_174453.jpg",
      "/images/cocina-torre-romanza-primera-remodelacion/IMG_20150824_174517.jpg",
      "/images/cocina-torre-romanza-primera-remodelacion/IMG_20150824_174524.jpg",
      "/images/cocina-torre-romanza-primera-remodelacion/IMG_20150824_174537.jpg",
      "/images/cocina-torre-romanza-primera-remodelacion/IMG_20150824_174546.jpg"
    ]
  },
    {
    nombre: "Cocina Proyecto Yasmine",
    categoria: "Remodelación de cocina",
    imagenes: [
      "/images/cocina-yasmine/cocina-yasmine.jpg"
    ]
  },
    {
    nombre: "Diseño de Casa Moderna",
    categoria: "Diseño arquitectónico",
    imagenes: [
      "/images/diseño-casa/diseño-casa.jpg"
    ]
  },
    {
    nombre: "Estructura Metálica",
    categoria: "Obra civil",
    imagenes: [
      "/images/estructura-metalica/IMG-20230902-WA0005.jpg",
      "/images/estructura-metalica/IMG-20230902-WA0006.jpg",
      "/images/estructura-metalica/IMG-20230902-WA0007.jpg"
    ]
  },
    {
    nombre: "Impermeabilización de Techos",
    categoria: "Mantenimiento / Obra civil",
    imagenes: [
      "/images/impermeabilizacion/IMG_20201203_165440.jpg",
      "/images/impermeabilizacion/IMG_20201203_165507.jpg",
      "/images/impermeabilizacion/IMG_20201203_165511.jpg",
      "/images/impermeabilizacion/IMG_20201203_165513.jpg"
    ]
  },
    {
    nombre: "Sistema de Alerta Contra Incendio",
    categoria: "Instalaciones especiales",
    imagenes: [
      "/images/instalacion-sistema-alerta-contra-incendio/IMG_20190318_181611.jpg",
      "/images/instalacion-sistema-alerta-contra-incendio/IMG_20190318_181622.jpg",
      "/images/instalacion-sistema-alerta-contra-incendio/IMG_20190318_181639.jpg",
      "/images/instalacion-sistema-alerta-contra-incendio/IMG_20190318_181734.jpg",
      "/images/instalacion-sistema-alerta-contra-incendio/IMG_20190318_181739.jpg",
      "/images/instalacion-sistema-alerta-contra-incendio/IMG_20190318_181746.jpg"
    ]
  },
    
    {
    nombre: "Remodelación de Local Comercial",
    categoria: "Remodelación comercial",
    imagenes: [
      "/images/local-comercial/20191019_184136.jpg",
      "/images/local-comercial/20191019_184142.jpg",
      "/images/local-comercial/20191028_161758.jpg",
      "/images/local-comercial/20191028_161800.jpg",
      "/images/local-comercial/20191028_161802.jpg",
      "/images/local-comercial/20191028_161812.jpg",
      "/images/local-comercial/20200610_133337.jpg",
      "/images/local-comercial/20200610_133356.jpg",
      "/images/local-comercial/20200610_133406.jpg"
    ]
  },
    {
    nombre: "Impermeabilización con Manta Asfáltica",
    categoria: "Obra civil / Impermeabilización",
    imagenes: [
      "/images/manta-asfaltica-torre-enriquillo/IMG_20181229_115141.jpg",
      "/images/manta-asfaltica-torre-enriquillo/IMG_20181229_115151.jpg",
      "/images/manta-asfaltica-torre-enriquillo/IMG_20181229_115209.jpg",
      "/images/manta-asfaltica-torre-enriquillo/IMG_20181229_115822.jpg",
      "/images/manta-asfaltica-torre-enriquillo/IMG_20181229_115834.jpg",
      "/images/manta-asfaltica-torre-enriquillo/IMG_20181229_115839.jpg",
      "/images/manta-asfaltica-torre-enriquillo/IMG_20181229_115849.jpg",
      "/images/manta-asfaltica-torre-enriquillo/IMG_20181229_115900.jpg",
      "/images/manta-asfaltica-torre-enriquillo/IMG_20181229_115923.jpg"
    ]
  },
    {
    nombre: "Impermeabilización Manta Asfáltica Vimenca",
    categoria: "Obra civil / Impermeabilización",
    imagenes: [
      "/images/manta-asfaltica-vimenca/IMG_20180627_163322.jpg",
      "/images/manta-asfaltica-vimenca/IMG_20180627_163332.jpg",
      "/images/manta-asfaltica-vimenca/IMG_20180627_163341.jpg",
      "/images/manta-asfaltica-vimenca/IMG_20180627_163350.jpg",
      "/images/manta-asfaltica-vimenca/IMG_20180627_163402.jpg",
      "/images/manta-asfaltica-vimenca/IMG_20180627_163415.jpg",
      "/images/manta-asfaltica-vimenca/IMG_20180627_175154_769.jpg"
    ]
  },
    {
    nombre: "Módulo Universidad del Caribe",
    categoria: "Obra civil / Estructura",
    imagenes: [
      "/images/modulo-universidad-delcaribe/IMG_20180715_132357_642.jpg",
      "/images/modulo-universidad-delcaribe/IMG_20180715_132357_644.jpg",
      "/images/modulo-universidad-delcaribe/IMG_20180715_132357_646.jpg"
    ]
  },
    {
    nombre: "Terraza Torre Jeshua 4",
    categoria: "Remodelación residencial / Terraza",
    imagenes: [
      "/images/terraza-torre-jeshua4/20180424_111649.jpg",
      "/images/terraza-torre-jeshua4/20180425_101403.jpg",
      "/images/terraza-torre-jeshua4/20180425_152951.jpg",
      "/images/terraza-torre-jeshua4/20180427_104748.jpg",
      "/images/terraza-torre-jeshua4/20180427_104751.jpg",
      "/images/terraza-torre-jeshua4/20180427_111601.jpg",
      "/images/terraza-torre-jeshua4/20180428_134144.jpg",
      "/images/terraza-torre-jeshua4/20180428_134203.jpg",
      "/images/terraza-torre-jeshua4/20180428_134205.jpg",
      "/images/terraza-torre-jeshua4/20180428_134215.jpg",
      "/images/terraza-torre-jeshua4/20180502_171114.jpg",
      "/images/terraza-torre-jeshua4/20180502_171312.jpg",
      "/images/terraza-torre-jeshua4/20180503_133745.jpg",
      "/images/terraza-torre-jeshua4/20180503_133828.jpg",
      "/images/terraza-torre-jeshua4/20180503_152651.jpg",
      "/images/terraza-torre-jeshua4/20180503_152710.jpg",
      "/images/terraza-torre-jeshua4/20180503_152716.jpg",
      "/images/terraza-torre-jeshua4/20180503_152724.jpg",
      "/images/terraza-torre-jeshua4/20180503_152738.jpg",
      "/images/terraza-torre-jeshua4/IMG_20180503_172639_310.jpg"
    ]
  },
    {
    nombre: "Remodelación Centro de Atención Primaria",
    categoria: "Remodelación institucional / Salud",
    imagenes: [
      "/images/remodelacion-centro-atencion-primaria-lotes-y-servicios/20170619_161152.jpg",
      "/images/remodelacion-centro-atencion-primaria-lotes-y-servicios/20170619_161159.jpg",
      "/images/remodelacion-centro-atencion-primaria-lotes-y-servicios/20170619_161246.jpg",
      "/images/remodelacion-centro-atencion-primaria-lotes-y-servicios/20170619_161317.jpg",
      "/images/remodelacion-centro-atencion-primaria-lotes-y-servicios/20170619_161325.jpg",
      "/images/remodelacion-centro-atencion-primaria-lotes-y-servicios/20170619_161340.jpg",
      "/images/remodelacion-centro-atencion-primaria-lotes-y-servicios/20170619_161346.jpg",
      "/images/remodelacion-centro-atencion-primaria-lotes-y-servicios/20170619_161407.jpg",
      "/images/remodelacion-centro-atencion-primaria-lotes-y-servicios/20170619_163535.jpg",
      "/images/remodelacion-centro-atencion-primaria-lotes-y-servicios/20170619_163541.jpg",
      "/images/remodelacion-centro-atencion-primaria-lotes-y-servicios/20170619_170532.jpg",
      "/images/remodelacion-centro-atencion-primaria-lotes-y-servicios/20170619_170558.jpg",
      "/images/remodelacion-centro-atencion-primaria-lotes-y-servicios/20170619_170825.jpg",
      "/images/remodelacion-centro-atencion-primaria-lotes-y-servicios/20170619_170848.jpg",
      "/images/remodelacion-centro-atencion-primaria-lotes-y-servicios/20170619_170855.jpg",
      "/images/remodelacion-centro-atencion-primaria-lotes-y-servicios/20170619_170924.jpg",
      "/images/remodelacion-centro-atencion-primaria-lotes-y-servicios/20170619_170938.jpg",
      "/images/remodelacion-centro-atencion-primaria-lotes-y-servicios/20170619_170949.jpg"
    ]
  },
    {
    nombre: "Pintura Externa Edificio Corporativo Profamilia",
    categoria: "Mantenimiento / Pintura institucional",
    imagenes: [
      "/images/pintura-externa-edificio-corporativo-profamilia/IMG_20190304_121537.jpg",
      "/images/pintura-externa-edificio-corporativo-profamilia/IMG_20190304_121542.jpg",
      "/images/pintura-externa-edificio-corporativo-profamilia/IMG_20190304_121546.jpg",
      "/images/pintura-externa-edificio-corporativo-profamilia/IMG_20190304_121550.jpg",
      "/images/pintura-externa-edificio-corporativo-profamilia/IMG_20190304_121820.jpg"
    ]
  },
  { nombre: 'Baño Torre Victoria Eugenia', categoria: 'Remodelación de baño', imagenes: ['/images/bano-victoria/bano-victoria-1.jpg', '/images/bano-victoria/bano-victoria-2.jpg', '/images/bano-victoria/bano-victoria-3.jpg'] },
  { nombre: 'Clínica Herrera', categoria: 'Proyecto comercial / clínico', imagenes: ['/images/clinica-herrera/clinica-herrera-1.jpg', '/images/clinica-herrera/clinica-herrera-2.jpg', '/images/clinica-herrera/clinica-herrera-3.jpg'] },
  { nombre: 'Baño Torre Romanza', categoria: 'Remodelación de baño', imagenes: ['/images/bano-romanza/bano-romanza-1.jpg', '/images/bano-romanza/bano-romanza-2.jpg', '/images/bano-romanza/bano-romanza-3.jpg'] },
  { nombre: 'Baño en Gazcue', categoria: 'Remodelación de baño', imagenes: [
  '/images/bano-gazcue2/20161125_094437.jpg',
  '/images/bano-gazcue2/20161125_094510.jpg',
  '/images/bano-gazcue2/20161125_094531.jpg',
  '/images/bano-gazcue2/20161125_094537.jpg',
  '/images/bano-gazcue2/20161125_094544.jpg',
  '/images/bano-gazcue2/20161125_094925.jpg',
  '/images/bano-gazcue2/20161125_094936.jpg',
  '/images/bano-gazcue2/20161125_094948.jpg',
  '/images/bano-gazcue2/20161125_095019.jpg'
] },

  { nombre: 'Baño Gazcue (Nuevo)', categoria: 'Remodelación de baño', imagenes: [
  '/images/bano-gazcue/IMG_20210330_191337.jpg',
  '/images/bano-gazcue/IMG_20210330_191350.jpg',
  '/images/bano-gazcue/IMG_20210330_191355.jpg',
  '/images/bano-gazcue/IMG_20210330_191440.jpg',
  '/images/bano-gazcue/IMG_20210330_191445.jpg',
  '/images/bano-gazcue/IMG_20210330_191450.jpg',
  '/images/bano-gazcue/IMG_20210330_191457.jpg',
  '/images/bano-gazcue/IMG_20210330_191505.jpg',
  '/images/bano-gazcue/IMG_20210330_191510.jpg',
  '/images/bano-gazcue/IMG_20210330_191521.jpg',
  '/images/bano-gazcue/IMG_20210330_191526.jpg',
  '/images/bano-gazcue/IMG_20210330_191533.jpg',
  '/images/bano-gazcue/IMG_20210330_191541.jpg'
] },
  { nombre: 'Baño en Los Prados', categoria: 'Remodelación de baño', imagenes: [
  '/images/bano-los-prados/IMG-20230416-WA0004.jpg',
  '/images/bano-los-prados/IMG-20230416-WA0005.jpg',
  '/images/bano-los-prados/IMG-20230416-WA0006.jpg',
  '/images/bano-los-prados/IMG-20230416-WA0007.jpg',
  '/images/bano-los-prados/IMG-20230416-WA0009.jpg'
] },
  { nombre: 'Lobby Antes', categoria: 'Lobby / recepción', imagenes: ['/images/lobby-antes-1.jpg', '/images/lobby-antes-2.jpg'] },
  { nombre: 'Apto. Anacaona', categoria: 'Remodelación residencial', imagenes: [
  '/images/apto-anacaona/20211127_160512.jpg',
  '/images/apto-anacaona/20211127_160515.jpg',
  '/images/apto-anacaona/20211127_160548.jpg',
  '/images/apto-anacaona/20211127_160557.jpg',
  '/images/apto-anacaona/20211127_160607.jpg',
  '/images/apto-anacaona/20211127_160612.jpg',
  '/images/apto-anacaona/20211127_160617.jpg',
  '/images/apto-anacaona/20211127_160622.jpg',
  '/images/apto-anacaona/20211127_160652.jpg',
  '/images/apto-anacaona/20211127_160700.jpg',
  '/images/apto-anacaona/20211127_160708.jpg',
  '/images/apto-anacaona/20211127_160718.jpg',
  '/images/apto-anacaona/IMG-20211106-WA0042.jpg',
  '/images/apto-anacaona/IMG-20211118-WA0032.jpeg',
  '/images/apto-anacaona/IMG-20211119-WA0035.jpg',
  '/images/apto-anacaona/IMG-20211119-WA0039.jpg',
  '/images/apto-anacaona/IMG-20211123-WA0025.jpeg',
  '/images/apto-anacaona/IMG-20211123-WA0042.jpeg'
] },
  { nombre: 'Caseta Planta', categoria: 'Obra civil', imagenes: [
  '/images/caseta-planta/20220114_170954.jpg',
  '/images/caseta-planta/20220114_171006.jpg',
  '/images/caseta-planta/20220114_171011.jpg',
  '/images/caseta-planta/20220114_171014.jpg',
  '/images/caseta-planta/Caseta de Planta.jpg'
] },
  { nombre: 'Divisiones para Oficina', categoria: 'Oficina / cristalería', imagenes: ['/images/divisiones-oficina-1.jpg', '/images/divisiones-oficina-2.jpg', '/images/divisiones-oficina-3.jpg'] },
  { nombre: 'Manta Asfáltica en Profamilia', categoria: 'Impermeabilización', imagenes: ['/images/manta-profamilia-1.jpg', '/images/manta-profamilia-2.jpg'] },
  { nombre: 'Techo con Nichos en Piantini', categoria: 'Terminación interior', imagenes: ['/images/techo-nichos-piantini-1.jpg', '/images/techo-nichos-piantini-2.jpg'] },
  { nombre: 'Piso Apto. en Piantini', categoria: 'Pisos y terminaciones', imagenes: ['/images/piso-piantini-1.jpg', '/images/piso-piantini-2.jpg'] },
  { nombre: 'Caseta de Almacenamiento', categoria: 'Obra civil', imagenes: [
  '/images/caseta-almacenamiento/IMG_20181103_141556.jpg',
  '/images/caseta-almacenamiento/IMG_20181104_133543.jpg',
  '/images/caseta-almacenamiento/IMG_20181104_133547.jpg',
  '/images/caseta-almacenamiento/IMG_20181104_141830.jpg',
  '/images/caseta-almacenamiento/IMG_20181104_141844.jpg',
  '/images/caseta-almacenamiento/IMG_20181104_141847.jpg',
  '/images/caseta-almacenamiento/IMG_20181112_161710.jpg',
  '/images/caseta-almacenamiento/IMG_20181112_161720.jpg',
  '/images/caseta-almacenamiento/IMG_20181113_150935.jpg',
  '/images/caseta-almacenamiento/IMG_20181113_173438.jpg',
  '/images/caseta-almacenamiento/IMG_20181113_173446.jpg',
  '/images/caseta-almacenamiento/IMG_20181113_203715.jpg',
  '/images/caseta-almacenamiento/IMG_20181205_132801_079.jpg',
  '/images/caseta-almacenamiento/IMG_20181205_132801_080.jpg',
  '/images/caseta-almacenamiento/IMG_20181205_132801_081.jpg',
  '/images/caseta-almacenamiento/IMG-20181114-WA0001.jpeg',
  '/images/caseta-almacenamiento/IMG-20181115-WA0005.jpg',
  '/images/caseta-almacenamiento/IMG-20181115-WA0009.jpg'
] },
  { nombre: 'Módulo Universidad del Caribe', categoria: 'Proyecto institucional', imagenes: ['/images/modulo-unicaribe-1.jpg', '/images/modulo-unicaribe-2.jpg'] },
  { nombre: 'Cisterna Superficial Merca SD', categoria: 'Obra civil', imagenes: [
  '/images/cisterna-superficial-mercasd/IMG_20180715_131717_211.jpg',
  '/images/cisterna-superficial-mercasd/IMG_20180715_131717_219.jpg',
  '/images/cisterna-superficial-mercasd/IMG_20180715_131717_238.jpg'
] },
  { nombre: 'Apto. en Piantini Remodelado', categoria: 'Remodelación residencial', imagenes: [
  '/images/apto-piantini-remodelado/IMG_20180906_184359.jpg',
  '/images/apto-piantini-remodelado/IMG_20180906_184413.jpg',
  '/images/apto-piantini-remodelado/IMG_20180906_184439.jpg',
  '/images/apto-piantini-remodelado/IMG_20180906_184449.jpg',
  '/images/apto-piantini-remodelado/IMG_20180906_184623.jpg',
  '/images/apto-piantini-remodelado/IMG_20180906_184740.jpg',
  '/images/apto-piantini-remodelado/IMG_20180906_184815.jpg',
  '/images/apto-piantini-remodelado/IMG_20180906_184826.jpg',
  '/images/apto-piantini-remodelado/IMG_20180906_184855.jpg',
  '/images/apto-piantini-remodelado/IMG_20180906_184918.jpg',
  '/images/apto-piantini-remodelado/IMG_20180906_184928.jpg',
  '/images/apto-piantini-remodelado/IMG_20180906_185022.jpg',
  '/images/apto-piantini-remodelado/IMG_20180906_185033.jpg',
  '/images/apto-piantini-remodelado/IMG_20180906_185052.jpg',
  '/images/apto-piantini-remodelado/IMG_20180906_185248.jpg',
  '/images/apto-piantini-remodelado/IMG_20180906_185259.jpg',
  '/images/apto-piantini-remodelado/IMG_20180906_185315.jpg',
  '/images/apto-piantini-remodelado/IMG_20180906_185321.jpg',
  '/images/apto-piantini-remodelado/IMG_20180906_192156.jpg',
  '/images/apto-piantini-remodelado/IMG-20180906-WA0007.jpeg',
  '/images/apto-piantini-remodelado/IMG-20180906-WA0045.jpeg'
] },
  { nombre: 'Cocina Moderna Proyecto Yasmine', categoria: 'Remodelación de cocina', imagenes: ['/images/cocina-yasmine-1.jpg', '/images/idea-cocina-yasmine-1.jpg', '/images/cocina-actual-yasmine-1.jpg', '/images/puerta-yasmine-1.jpg'] },
  { nombre: 'Pintura Exterior Clínica', categoria: 'Pintura exterior', imagenes: ['/images/pintura-clinica-1.jpg', '/images/pintura-clinica-2.jpg'] },
  { nombre: 'Sistema de Alerta Contra Incendio', categoria: 'Instalación técnica', imagenes: ['/images/sistema-incendio-1.jpg', '/images/sistema-incendio-2.jpg'] },
  { nombre: 'Baños 4to Nivel', categoria: 'Remodelación de baños', imagenes: ['/images/banos-4to-nivel-1.jpg', '/images/banos-4to-nivel-2.jpg'] },
  { nombre: 'Manta Asfáltica Torre Enriquillo', categoria: 'Impermeabilización', imagenes: ['/images/manta-enriquillo-1.jpg', '/images/manta-enriquillo-2.jpg'] },
  { nombre: 'Local Comercial', categoria: 'Proyecto comercial', imagenes: ['/images/local-comercial-1.jpg', '/images/local-comercial-2.jpg'] },
  { nombre: 'Techo Colgante Apto.', categoria: 'Terminación interior', imagenes: ['/images/techo-colgante-1.jpg', '/images/techo-colgante-2.jpg'] },
  { nombre: 'Lobby Clínica', categoria: 'Lobby / recepción', imagenes: ['/images/lobby-clinica-1.jpg', '/images/lobby-clinica-2.jpg'] },
  { nombre: 'Pérgolas en Torre', categoria: 'Exterior / estructura', imagenes: ['/images/pergolas-torre-1.jpg', '/images/pergolas-torre-2.jpg'] },
  { nombre: 'Aparta Estudio en Sabana Perdida', categoria: 'Remodelación residencial', imagenes: ['/images/aparta-estudio-sabana-1.jpg', '/images/aparta-estudio-sabana-2.jpg'] },
  { nombre: 'Alucobond y Techo Escalonado en Sertel', categoria: 'Fachada / terminación', imagenes: ['/images/sertel-alucobond-1.jpg', '/images/sertel-alucobond-2.jpg'] },
  { nombre: 'Closet en Los Prados', categoria: 'Carpintería / closet', imagenes: ['/images/closet-prados-1.jpg', '/images/closet-prados-2.jpg'] },
  { nombre: 'Apto. Katy Méndez', categoria: 'Remodelación residencial', imagenes: ['/images/apto-katy-1.jpg', '/images/apto-katy-2.jpg'] },
  { nombre: 'Cocina Próx. a Carrefour', categoria: 'Remodelación de cocina', imagenes: ['/images/cocina-carrefour-1.jpg', '/images/cocina-carrefour-2.jpg'] },
  { nombre: 'Estructura Metálica', categoria: 'Estructura metálica', imagenes: ['/images/estructura-metalica-1.jpg', '/images/estructura-metalica-2.jpg'] },
  { nombre: 'Diseño de Lobby', categoria: 'Diseño arquitectónico', imagenes: ['/images/diseno-lobby-1.jpg', '/images/diseno-lobby-2.jpg'] },
  { nombre: 'Baño en Cacicazgos', categoria: 'Remodelación de baño', imagenes: ['/images/bano-cacicazgos-1.jpg', '/images/bano-cacicazgos-2.jpg'] },
  { nombre: 'Lobby Proyecto', categoria: 'Lobby / recepción', imagenes: ['/images/lobby-1.jpg', '/images/lobby-2.jpg'] },
  { nombre: 'Baño de la Prima', categoria: 'Remodelación de baño', imagenes: ['/images/bano-prima-1.jpg', '/images/bano-prima-2.jpg'] },
  { nombre: 'Manta Asfáltica Casa Doña Miguelina', categoria: 'Impermeabilización', imagenes: ['/images/manta-dona-miguelina-1.jpg', '/images/manta-dona-miguelina-2.jpg'] },
  { nombre: 'Remodelación Cocina Romanza', categoria: 'Remodelación de cocina', imagenes: ['/images/cocina-romanza-1.jpg', '/images/cocina-romanza-2.jpg'] },
  { nombre: 'Baño Wanda', categoria: 'Remodelación de baño', imagenes: ['/images/bano-wanda-1.jpg', '/images/bano-wanda-2.jpg'] },

  { nombre: 'Baño Arroyo Hondo', categoria: 'Remodelación de baño', imagenes: [
  '/images/bano-arroyo-hondo/20250521_160342.jpg',
  '/images/bano-arroyo-hondo/20250521_160347.jpg',
  '/images/bano-arroyo-hondo/20250521_160352.jpg',
  '/images/bano-arroyo-hondo/20250521_160355.jpg'
] },
  { nombre: 'Sala Romanza', categoria: 'Remodelación interior', imagenes: ['/images/sala-romanza-1.jpg', '/images/sala-romanza-2.jpg'] },
  { nombre: 'Oficina Profamilia', categoria: 'Oficina / comercial', imagenes: ['/images/oficina-profamilia-1.jpg', '/images/oficina-profamilia-2.jpg'] },
  { nombre: 'Cocina Hispania', categoria: 'Remodelación de cocina', imagenes: ['/images/cocina-hispania-1.jpg', '/images/cocina-hispania-2.jpg'] },
  { nombre: 'Baños Nidia', categoria: 'Remodelación de baños', imagenes: ['/images/bano-nidia-1.jpg', '/images/bano-nidia-2.jpg', '/images/mueble-tv-nidia-1.jpg'] },
  { nombre: 'Sala Torre Romanza', categoria: 'Remodelación interior', imagenes: ['/images/sala-torre-romanza-1.jpg', '/images/sala-torre-romanza-2.jpg'] },
  { nombre: 'Aparta Estudio Gazcue', categoria: 'Remodelación residencial', imagenes: [
  '/images/aparta-estudio-gazcue/20180725_094811.jpg',
  '/images/aparta-estudio-gazcue/20180725_094818.jpg',
  '/images/aparta-estudio-gazcue/20180725_094842.jpg',
  '/images/aparta-estudio-gazcue/20180725_094849.jpg',
  '/images/aparta-estudio-gazcue/20180725_094855.jpg',
  '/images/aparta-estudio-gazcue/20180725_095000.jpg',
  '/images/aparta-estudio-gazcue/20180725_095035.jpg',
  '/images/aparta-estudio-gazcue/20180725_095044.jpg',
  '/images/aparta-estudio-gazcue/20180725_095105.jpg',
  '/images/aparta-estudio-gazcue/20180725_095202.jpg',
  '/images/aparta-estudio-gazcue/20180725_095328.jpg',
  '/images/aparta-estudio-gazcue/20180725_095338.jpg',
  '/images/aparta-estudio-gazcue/20180725_095356.jpg',
  '/images/aparta-estudio-gazcue/FB_IMG_15052321962414782.jpg',
  '/images/aparta-estudio-gazcue/FB_IMG_15052322071848070.jpg',
  '/images/aparta-estudio-gazcue/FB_IMG_15052322204235153.jpg',
  '/images/aparta-estudio-gazcue/FB_IMG_15052322262200195.jpg',
  '/images/aparta-estudio-gazcue/FB_IMG_15052322898397703.jpg',
  '/images/aparta-estudio-gazcue/FB_IMG_15052322934236175.jpg',
  '/images/aparta-estudio-gazcue/FB_IMG_15052323605774266.jpg'
] },
  { nombre: 'Cocina Torre Romanza', categoria: 'Remodelación de cocina', imagenes: ['/images/cocina-torre-romanza-1.jpg', '/images/cocina-torre-romanza-2.jpg'] },

  { nombre: 'Apto. Evaristo Morales', categoria: 'Remodelación residencial', imagenes: [
  '/images/apto-evaristo-morales/IMG_20201203_150809.jpg',
  '/images/apto-evaristo-morales/IMG_20201203_150829.jpg',
  '/images/apto-evaristo-morales/IMG_20201203_150922.jpg',
  '/images/apto-evaristo-morales/IMG_20201203_151036.jpg',
  '/images/apto-evaristo-morales/IMG_20201203_155656.jpg',
  '/images/apto-evaristo-morales/IMG_20201203_155744.jpg',
  '/images/apto-evaristo-morales/IMG_20201203_165335.jpg',
  '/images/apto-evaristo-morales/IMG_20201203_174932.jpg',
  '/images/apto-evaristo-morales/IMG_20201207_204404.jpg',
  '/images/apto-evaristo-morales/IMG_20201207_204411.jpg',
  '/images/apto-evaristo-morales/IMG_20201209_164340.jpg',
  '/images/apto-evaristo-morales/IMG_20201209_164350.jpg',
  '/images/apto-evaristo-morales/IMG_20201209_180012.jpg',
  '/images/apto-evaristo-morales/IMG_20201209_180044.jpg',
  '/images/apto-evaristo-morales/IMG_20201209_180142.jpg',
  '/images/apto-evaristo-morales/IMG_20201209_180237.jpg',
  '/images/apto-evaristo-morales/IMG_20201209_180304.jpg',
  '/images/apto-evaristo-morales/IMG-20201209-WA0065.jpeg',
  '/images/apto-evaristo-morales/IMG-20201209-WA0067.jpeg',
  '/images/apto-evaristo-morales/IMG-20201209-WA0068.jpeg'
] },

{ nombre: 'Apto. Gazcue Próximo Palacio Presidencial', categoria: 'Remodelación residencial', imagenes: [
  '/images/apto-gazcue-proximo-palacio-presidencial/IMG_20180707_184255_794.jpg',
  '/images/apto-gazcue-proximo-palacio-presidencial/IMG_20180707_184600_935.jpg',
  '/images/apto-gazcue-proximo-palacio-presidencial/IMG_20180707_192305_511.jpg',
  '/images/apto-gazcue-proximo-palacio-presidencial/IMG_20180707_192746_399.jpg',
  '/images/apto-gazcue-proximo-palacio-presidencial/IMG_20180707_192746_407.jpg',
  '/images/apto-gazcue-proximo-palacio-presidencial/IMG_20180707_192746_410.jpg',
  '/images/apto-gazcue-proximo-palacio-presidencial/IMG_20180707_193327_807.jpg',
  '/images/apto-gazcue-proximo-palacio-presidencial/IMG_20180707_193327_808.jpg',
  '/images/apto-gazcue-proximo-palacio-presidencial/IMG_20180707_193327_809.jpg',
  '/images/apto-gazcue-proximo-palacio-presidencial/IMG_20180707_193327_813.jpg',
  '/images/apto-gazcue-proximo-palacio-presidencial/IMG_20180707_193327_814.jpg'
] }
]

export default function ConstructoraArte() {
  const [proyectoActivo, setProyectoActivo] = useState<any>(null)
  const [nombreContacto, setNombreContacto] = useState('')
  const [correoContacto, setCorreoContacto] = useState('')
  const [mensajeContacto, setMensajeContacto] = useState('')

  const telefonoWhatsApp = '18099073100'
  const mensajeWhatsAppBase = encodeURIComponent('Hola, vengo de la página web de Constructora Arte. Me gustaría solicitar una cotización para un proyecto.')
  const enlaceWhatsApp = `https://wa.me/${telefonoWhatsApp}?text=${mensajeWhatsAppBase}`

  const enviarFormulario = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const mensaje = encodeURIComponent(
      `Hola, vengo de la página web de Constructora Arte.%0A%0A` +
      `Nombre: ${nombreContacto}%0A` +
      `Correo: ${correoContacto}%0A%0A` +
      `Mensaje:%0A${mensajeContacto}`
    )

    window.open(`https://wa.me/${telefonoWhatsApp}?text=${mensaje}`, '_blank')
  }

  const carpetasConFotosReales = [  '/images/bano-gazcue2/',
  '/images/bano-gazcue/',
  '/images/bano-los-prados/',
  '/images/apto-anacaona/',
  '/images/caseta-planta/',
  '/images/caseta-almacenamiento/',
  '/images/cisterna-superficial-mercasd/',
  '/images/apto-piantini-remodelado/',
  '/images/bano-arroyo-hondo/',
  '/images/banos-arroyo-hondo/',
  '/images/aparta-estudio-gazcue/',
  '/images/apto-evaristo-morales/',
  '/images/apto-gazcue-proximo-palacio-presidencial/',
  '/images/cocina-hispania/',
  '/images/divisiones-cristal-oficinas/',
  '/images/lobby-clinica/',
  '/images/lobby-piantini/',
  '/images/bano-proximo-carrefur/',
  '/images/banos-profamilia/',
  '/images/bano-torre-romanza/',
  '/images/cocina-proximocarrefur/',
  '/images/cocina-torre-romanza-primera-remodelacion/',
  '/images/cocina-yasmine/',
  '/images/diseño-casa/',
  '/images/estructura-metalica/',
  '/images/impermeabilizacion/',
  '/images/instalacion-sistema-alerta-contra-incendio/',
  '/images/lavado-impermeabilizacion-pintura-paredes-externas-torre-enriquillo/',
  '/images/local-comercial/',
  '/images/manta-asfaltica-torre-enriquillo/',
  '/images/manta-asfaltica-vimenca/',
  '/images/modulo-universidad-delcaribe/',
  '/images/terraza-torre-jeshua4/',
  '/images/remodelacion-centro-atencion-primaria-lotes-y-servicios/',
  '/images/pintura-externa-edificio-corporativo-profamilia/'
]

  // 🔥 Ordenar proyectos por prioridad (los que más venden primero)
  const proyectosPrioritarios = [
    'Terraza Torre Jeshua 4',
    'Cocina Torre Romanza',
    'Cocina Torre Romanza (Primera Remodelación)',
    'Baño Torre Romanza'
  ]

  const proyectosConFotos = proyectos
    .filter((proyecto) =>
      carpetasConFotosReales.some((carpeta) => proyecto.imagenes[0].startsWith(carpeta))
    )
    .filter((proyecto, index, lista) =>
      index === lista.findIndex((item) => item.nombre === proyecto.nombre)
    )
    .map((proyecto) => {
      // 🚫 Evitar que la primera imagen sea "antes" o collage
      if (proyecto.nombre === 'Cocina Torre Romanza (Primera Remodelación)') {
        const imagenesFiltradas = proyecto.imagenes.filter(img => !img.toLowerCase().includes('anterior'))
        return { ...proyecto, imagenes: imagenesFiltradas }
      }
      return proyecto
    })
    .sort((a, b) => {
      const aIndex = proyectosPrioritarios.indexOf(a.nombre)
      const bIndex = proyectosPrioritarios.indexOf(b.nombre)

      if (aIndex === -1 && bIndex === -1) return 0
      if (aIndex === -1) return 1
      if (bIndex === -1) return -1
      return aIndex - bIndex
    }) =>
      carpetasConFotosReales.some((carpeta) => proyecto.imagenes[0].startsWith(carpeta))
    )
    .filter((proyecto, index, lista) =>
      index === lista.findIndex((item) => item.nombre === proyecto.nombre)
    )

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-slate-900 text-white py-6 px-6 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Constructora Arte</h1>
          <nav className="hidden md:flex gap-6 text-lg">
            <a href="#inicio" className="hover:text-yellow-400">Inicio</a>
            <a href="#servicios" className="hover:text-yellow-400">Servicios</a>
            <a href="#proyectos" className="hover:text-yellow-400">Proyectos</a>
            <a href="#contacto" className="hover:text-yellow-400">Contacto</a>
          </nav>
        </div>
      </header>

      <section id="inicio" className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6">Construimos tus ideas</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Expertos en construcción, remodelación, diseño arquitectónico, supervisión e impermeabilización.
          </p>
          <a href={enlaceWhatsApp} target="_blank" className="inline-block bg-yellow-500 text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-400 transition">
            Solicitar Cotización
          </a>
        </div>
      </section>

      <section id="servicios" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16">Nuestros Servicios</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { titulo: 'Construcción de Obras', descripcion: 'Ejecución de obras civiles y edificaciones con altos estándares de calidad, seguridad y cumplimiento en cada etapa del proyecto.' },
              { titulo: 'Remodelaciones', descripcion: 'Transformamos tus espacios, ya sea tu baño, cocina o cualquier área de tu hogar o negocio, con acabados modernos y funcionales.' },
              { titulo: 'Diseño Arquitectónico', descripcion: 'Diseños estándar, ajustados a tus gustos, minimalistas o modernos, desarrollados para combinar estética, funcionalidad y eficiencia.' },
              { titulo: 'Supervisión de Proyectos', descripcion: 'Supervisión profesional con cumplimiento de las normas ACI 318, ACI 318R y demás estándares aplicables, incluyendo pruebas de concreto y control de calidad.' },
              { titulo: 'Impermeabilización', descripcion: 'Instalación de mantas asfálticas italianas lisas y granuladas de alta calidad, aplicadas por profesionales con más de 10 años de experiencia.' },
              { titulo: 'Consultoría Técnica', descripcion: 'Visitas técnicas y asesorías personalizadas, adaptadas a tus necesidades y a las condiciones particulares de cada proyecto.' }
            ].map((servicio) => (
              <div key={servicio.titulo} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
                <h4 className="text-2xl font-semibold mb-4">{servicio.titulo}</h4>
                <p className="text-gray-600">{servicio.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4">Galería de Proyectos</h3>
          <p className="text-center text-gray-600 mb-16">Haz clic en cualquier proyecto para ver sus fotos.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectosConFotos.map((proyecto) => (
              <button
                key={proyecto.nombre}
                onClick={() => setProyectoActivo(proyecto)}
                className="text-left overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition group"
              >
                <img
                  src={proyecto.imagenes[0]}
                  alt={proyecto.nombre}
                  onError={(e) => {
                    const img = e.currentTarget
                    const segundaImagen = proyecto.imagenes[1]
                    if (segundaImagen && img.src !== segundaImagen) {
                      img.src = segundaImagen
                    } else {
                      img.src = '/images/placeholder.jpg'
                    }
                  }}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="p-5">
                  <p className="text-sm text-yellow-600 font-semibold mb-1">{proyecto.categoria}</p>
                  <h4 className="text-xl font-bold">{proyecto.nombre}</h4>
                  <p className="text-gray-500 mt-2">Ver {proyecto.imagenes.length} fotos</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {proyectoActivo && (
        <div className="fixed inset-0 bg-black/80 z-[100] p-4 overflow-y-auto">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl my-8">
            <div className="flex justify-between items-center p-6 border-b">
              <div>
                <p className="text-sm text-yellow-600 font-semibold">{proyectoActivo.categoria}</p>
                <h3 className="text-3xl font-bold">{proyectoActivo.nombre}</h3>
              </div>
              <button onClick={() => setProyectoActivo(null)} className="bg-slate-900 text-white px-5 py-3 rounded-xl font-bold hover:bg-slate-700">
                Cerrar
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
              {proyectoActivo.imagenes.map((img: string, index: number) => (
                <img
                  key={img}
                  src={img}
                  alt={`${proyectoActivo.nombre} ${index + 1}`}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                  className="w-full h-72 object-cover rounded-xl shadow"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <section id="contacto" className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-4xl font-bold mb-8">Contáctanos</h3>
            <div className="space-y-4 text-lg">
              <p><strong>Teléfono:</strong> 809-907-3100</p>
              <p><strong>Email:</strong> construcarte@gmail.com</p>
              <p><strong>Dirección:</strong> Calle Cayetano Rodríguez 207 C, Gazcue</p>
            </div>
          </div>

          <form onSubmit={enviarFormulario} className="space-y-6 bg-white text-gray-900 p-8 rounded-2xl shadow-2xl">
            <input
              type="text"
              placeholder="Nombre"
              value={nombreContacto}
              onChange={(e) => setNombreContacto(e.target.value)}
              required
              className="w-full p-4 rounded-xl border border-gray-300"
            />
            <input
              type="email"
              placeholder="Correo Electrónico"
              value={correoContacto}
              onChange={(e) => setCorreoContacto(e.target.value)}
              required
              className="w-full p-4 rounded-xl border border-gray-300"
            />
            <textarea
              rows={5}
              placeholder="Cuéntanos sobre tu proyecto"
              value={mensajeContacto}
              onChange={(e) => setMensajeContacto(e.target.value)}
              required
              className="w-full p-4 rounded-xl border border-gray-300"
            ></textarea>
            <button type="submit" className="w-full bg-yellow-500 text-slate-900 py-4 rounded-xl font-bold hover:bg-yellow-400 transition">
              Enviar por WhatsApp
            </button>
            <p className="text-sm text-gray-500 text-center">
              Al enviar, se abrirá WhatsApp con tu mensaje listo para confirmar.
            </p>
          </form>
        </div>
      </section>

      <a href={enlaceWhatsApp} target="_blank" className="fixed bottom-6 right-6 z-[90] bg-green-500 text-white px-5 py-4 rounded-full shadow-2xl font-bold hover:bg-green-600 transition">
        WhatsApp
      </a>

      <footer className="bg-black text-white text-center py-8">
        <p>© 2026 Constructora Arte. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}


