/* eslint-disable no-console */

import Inputselectaddlayer from 'facade/inputselectaddlayer';

const map = M.map({
  container: 'mapjs',
});

map.addControls(['ScaleLine', 'Mouse', 'panzoombar', 'layerSwitcher']);

/* INICIO DEFINICIÓN LAYERS RASTER*/

const ortofoto2016_pancromatica = new M.layer.WMS({
  url: 'http://www.ideandalucia.es/wms/ortofoto2016?',
  name: 'ortofotografia_2016_pancromatico',
  legend: 'Ortofotografía Pancromática 0,5 metros/pixel (Año 2016)',
  transparent: true,
  tiled: true
}, {
  styles: 'default'
})

const ortofoto2016_color = new M.layer.WMS({
  url: 'http://www.ideandalucia.es/wms/ortofoto2016?',
  name: 'ortofotografia_2016_rgb',
  legend: 'Ortofotografía Color 0,5 metros/pixel (Año 2016)',
  transparent: true,
  tiled: true
}, {
  styles: 'default'
})

const ortofoto2016_infrarrojo = new M.layer.WMS({
  url: 'http://www.ideandalucia.es/wms/ortofoto2016?',
  name: 'ortofotografia_2016_infrarrojo',
  legend: 'Ortofotografía Infrarrojo 0,5 metros/pixel (Año 2016)',
  transparent: true,
  tiled: true
}, {
  styles: 'default'
})

const ortofoto2013_color = new M.layer.WMS({
  url: 'http://www.ideandalucia.es/wms/ortofoto2013?',
  name: 'OCA05_2013',
  legend: 'Ortofotografía en Color 0,5 metros/pixel (Año 2013)',
  transparent: true,
  tiled: true
}, {
  styles: 'default'
})

const ortofoto2011_color = new M.layer.WMS({
  url: 'http://www.ideandalucia.es/wms/ortofoto2010?',
  name: 'OCA10_2010',
  legend: 'Ortofotografía en Color 0,5 metros/pixel (Año 2011)',
  transparent: true,
  tiled: true
}, {
  styles: 'default'
})

const ortofoto2009_color = new M.layer.WMS({
  url: 'http://www.ideandalucia.es/wms/ortofoto2009?',
  name: 'OCA10_2009',
  legend: 'Ortofotografía en Color 0,5 metros/pixel (Año 2009)',
  transparent: true,
  tiled: true
}, {
  styles: 'default'
})

const ortofoto2007_color = new M.layer.WMS({
  url: 'http://www.ideandalucia.es/wms/ortofoto2007?',
  name: 'ORTO_2007',
  legend: 'Ortofotografía en Color 1 metro/pixel (Año 2007)',
  transparent: true,
  tiled: true
}, {
  styles: 'default'
})

const ortofoto2004_color = new M.layer.WMS({
  url: 'http://www.ideandalucia.es/wms/ortofoto2004?',
  name: 'ORTO_2004',
  legend: 'Ortofotografía en Color 1 metro/pixel (Año 2004)',
  transparent: true,
  tiled: true
}, {
  styles: 'default'
})

const ortofoto2001_pancromatica = new M.layer.WMS({
  url: 'http://www.ideandalucia.es/wms/ortofoto2001?',
  name: 'ORTO_2001',
  legend: 'Ortofotografía Pancromática 0,5 metros/pixel  (Año 2001)',
  transparent: true,
  tiled: true
}, {
  styles: 'default'
})

const ortofoto1998_color = new M.layer.WMS({
  url: 'http://www.ideandalucia.es/wms/ortofoto1998?',
  name: 'ortofoto1998',
  legend: 'Ortofotografía en Color 1 metro/pixel (Año 1998)',
  transparent: true,
  tiled: true
}, {
  styles: 'default'
})

const ortofoto1956_pancromatica = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_Ortofoto_Andalucia_1956?',
  name: 'REDIAM',
  legend: 'Ortofotografía Pancromática 1 metro/pixel (Año 1956)',
  transparent: true,
  tiled: true
}, {
  styles: 'default'
})


const direst_transporte_2018 = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/direst/wms?',
  name: 'direst_transporte_2018',
  legend: 'Sector Transporte y almacenamiento',
  transparent: true,
  tiled: true
}, {
  styles: 'direst_transporte'
})


const direst_servicios_2018 = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/direst/wms?',
  name: 'direst_servicios_2018',
  legend: 'Sector Servicios sanitarios, educativos y resto de servicios',
  transparent: true,
  tiled: true
}, {
  styles: 'direst_servicios'
})

const direst_industria_2018 = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/direst/wms?',
  name: 'direst_industria_2018',
  legend: 'Sector Industria',
  transparent: true,
  tiled: true
}, {
  styles: 'direst_industria'
})

const direst_hosteleria_2018 = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/direst/wms?',
  name: 'direst_hosteleria_2018',
  legend: 'Sector Hostelería',
  transparent: true,
  tiled: true
}, {
  styles: 'direst_hosteleria'
})

const direst_energia_2018 = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/direst/wms?',
  name: 'direst_energia_2018',
  legend: 'Sector Energía, agua y resíduos',
  transparent: true,
  tiled: true
}, {
  styles: 'direst_energia'
})

const direst_construccion_2018 = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/direst/wms?',
  name: 'direst_construccion_2018',
  legend: 'Sector Construcción',
  transparent: true,
  tiled: true
}, {
  styles: 'direst_construccion'
})

const direst_comercio_2018 = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/direst/wms?',
  name: 'direst_comercio_2018',
  legend: 'Sector Comercio',
  transparent: true,
  tiled: true
}, {
  styles: 'direst_comercio'
})

const viviendas_colectivas = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Viviendas colectivas. Urbano',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c011_viviendas_colectivas'
})

const viviendas_unifamiliares = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Viviendas unifamiliares. Urbano',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c012_viviendas_unifamiliares'
})

const edificiacion_rural = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Edificación rural',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c013_edificiacion_rural'
})

const garages_viviendas = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Garajes viviendas',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c01G_garages_viviendas'
})

const otros_garajes = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Otros garajes y aparcamientos',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c022_otros_garajes'
})

const industrial = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Industrial',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c02_industrial'
})

const oficinas = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Oficinas',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c03_oficinas'
})

const comercio = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Comercio',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c04_comercio'
})

const deporte = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Deportes',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c05_Deportes'
})

const piscinas = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Piscinas',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c05P_piscinas'
})

const espectaculos = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Espectáculos',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c06_espectaculos'
})

const hosteleria_ocio = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Hostelería y Ocio',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c07_hosteleria_ocio'
})

const sanitarios_beneficos = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Sanitarios, asistenciales y benéficos',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c08_sanitarios_beneficos'
})

const culturales = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Culturales',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c09_culturales'
})

const religiosos = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Religiosos',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c093_religioso'
})

const singulares = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Singulares',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c10_singulares'
})

const campo_golf = new M.layer.WMS({
  url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
  name: 'gridcattp_250',
  legend: 'Campos de Golf',
  transparent: true,
  tiled: true
}, {
  styles: 'stl_c1034_golf'
})

/* FIN DEFINICIÓN LAYERS RASTER*/

/* INICIO DEFINICIÓN LAYERS VECTOR*/

//Parámetros Opcionales Cluster
let vendorParameters = {
  distanceSelectFeatures: 25,
  convexHullStyle: {
    fill: {
      color: '#0000FF',
      opacity: 1
    },
    stroke: {
      color: '#0000FF',
      width: 1
    }
  }
}


//Capa ise:Nuevas_Tecnologias

let tecnologia = new M.layer.WFS({
  name: "Nuevas_Tecnologias",

  url: "https://www.ideandalucia.es/services/ise/wfs?",
  namespace: "ise",
  legend: "Nuevas tecnologías",
  geometry: 'POINT',
  extract: true
}, {
  vendor: {
    getFeature: {
      'propertyName': 'Nombre,Dependencia,Nivel1,Nivel2,Tipo,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'
    }
  }
});

//Asignación de Iconos

let tecnologiaRedAndaluzaDePosicionamiento = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Tecnologia/rap.png'
  }
});

let tecnologiaGuadalinfo = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Tecnologia/guadalinfo.png'
  }
});


//Simbología categorizada

let categoriaTecnologia = new M.style.Category("Nivel2", {

  "Red andaluza de posicionamiento": tecnologiaRedAndaluzaDePosicionamiento,
  "Centros Guadalinfo": tecnologiaGuadalinfo
});

//Simbología Cluster
let clusterOptionsTecnologia = {
  ranges: [{
    min: 2,
    max: 100,
    style: new M.style.Point({
      fill: {
        color: '#37abc8',
        opacity: 1
      },
      stroke: {
        color: '#FFFFFF'
      },
      radius: 12
    })
  }
  ],
  animated: true,
  hoverInteraction: false,
  displayAmount: true,
  selectedInteraction: true,
  maxFeaturesToSelect: 2,
  distance: 100,
  label: {
    font: 'bold 12px Comic Sans MS',
    color: '#FFFFFF'
  }
};

//Creación del estilo Cluster
let clusterStyleTecnologia = new M.style.Cluster(clusterOptionsTecnologia, vendorParameters);

//Creación del estilo composite
let compositeTecnologia = categoriaTecnologia.add(clusterStyleTecnologia);

//asignación del estilo final
tecnologia.setStyle(compositeTecnologia);



//Capa ise:Agricultura

let agricultura = new M.layer.WFS({
  name: "Agricultura_Ganaderia_Pesca",
  url: "https://www.ideandalucia.es/services/ise/wfs?",
  namespace: "ise",
  legend: "Agricultura, ganadería y pesca",
  geometry: 'MPOINT',
  extract: true
}, {
  vendor: {
    getFeature: {
      'propertyName': 'Nombre,Tipo,Dependencia,Nivel1,Nivel2,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'
    }
  }
});

//Asignación de Iconos

let agriculturaOCA = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Agricultura/oca.png'
  }
});

let agriculturaAgroclimatica = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Agricultura/agroclimatica.png'
  }
});
let agriculturaGrupodr = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Agricultura/9_61_gdr.png'
  }
});

//Simbología categorizada

let categoriaAgricultura = new M.style.Category("Nivel2", {
  "Oficinas comarcales y locales agrarias": agriculturaOCA,
  "Información agroclimática": agriculturaAgroclimatica,
  "Grupos de Desarrollo Rural": agriculturaGrupodr
});

//Simbología Cluster
let clusterOptionsAgricultura = {
  ranges: [{
    min: 2,
    max: 100,
    style: new M.style.Point({
      fill: {
        color: 'f28d4e',
        opacity: 1
      },
      stroke: {
        color: '#FFFFFF'
      },
      radius: 12
    })
  }
  ],
  animated: true,
  hoverInteraction: false,
  displayAmount: true,
  selectedInteraction: true,
  maxFeaturesToSelect: 2,
  distance: 100,
  label: {
    font: 'bold 12px Comic Sans MS',
    color: '#FFFFFF'
  }
};

//Creación del estilo Cluster
let clusterStyleAgricultura = new M.style.Cluster(clusterOptionsAgricultura, vendorParameters);

//Creación del estilo composite
let compositeAgricultura = categoriaAgricultura.add(clusterStyleAgricultura);

//asignación del estilo final
agricultura.setStyle(compositeAgricultura);


//Capa ise:Cultura

let cultura = new M.layer.WFS({
  name: "Cultura",
  url: "https://www.ideandalucia.es/services/ise/wfs?",
  namespace: "ise",
  legend: "Cultura",
  geometry: 'POINT',
  extract: true
}, {
  vendor: {
    getFeature: {
      'propertyName': 'Nombre,Tipo,Dependencia,Nivel1,Nivel2,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'
    }
  }
});




//Asignación de Iconos

let culturaArtesEscenicas = new M.style.Point({
  icon: {
    src: ' https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Cultura/artes.png'
  }
});

let culturaLetras = new M.style.Point({
  icon: {
    src: ' https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Cultura/letras.png'
  }
});

let culturaOtrosCentros = new M.style.Point({
  icon: {
    src: ' https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Cultura/otros_centros.png'
  }
});

let culturaPatrimonio = new M.style.Point({
  icon: {
    src: ' https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Cultura/patrimonio_c.png'
  }
});

//Simbología categorizada

let categoriaCultura = new M.style.Category("Nivel2", {
  "Artes escénicas": culturaArtesEscenicas,
  "Letras, bibliotecas y archivos": culturaLetras,
  "Otros centros": culturaOtrosCentros,
  "Patrimonio": culturaPatrimonio
});

//Simbología Cluster
let clusterOptionsCultura = {
  ranges: [{
    min: 2,
    max: 100,
    style: new M.style.Point({
      fill: {
        color: '#1b325f',
        opacity: 1
      },
      stroke: {
        color: '#FFFFFF'
      },
      radius: 12
    })
  }
  ],
  animated: true,
  hoverInteraction: false,
  displayAmount: true,
  selectedInteraction: true,
  maxFeaturesToSelect: 2,
  distance: 100,
  label: {
    font: 'bold 12px Comic Sans MS',
    color: '#FFFFFF'
  }
};

//Creación del estilo Cluster
let clusterStyleCultura = new M.style.Cluster(clusterOptionsCultura, vendorParameters);

//Creación del estilo composite
let compositeCultura = categoriaCultura.add(clusterStyleCultura);

//asignación del estilo final
cultura.setStyle(compositeCultura);


//Capa ise:EmpresasYprofesionales

let empresa = new M.layer.WFS({
  name: "EmpresasYprofesionales",
  url: "https://www.ideandalucia.es/services/ise/wfs?",
  namespace: "ise",
  legend: "Empresas y profesionales",
  geometry: 'POINT',
  extract: true
}, {
  vendor: {
    getFeature: {
      'propertyName': 'Dependencia,Nivel1,Nivel2,Tipo,Nombre,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'
    }
  }
});

//Asignación de Iconos

let empresaEmprendimiento = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Empresa/emprendedores.png'

  }
});

//Simbología categorizada

let categoriaEmpresa = new M.style.Category("Nivel2", {

  "Emprendimiento": empresaEmprendimiento
});

//Simbología Cluster
let clusterOptionsEmpresa = {
  ranges: [{
    min: 2,
    max: 100,
    style: new M.style.Point({
      fill: {
        color: '#9e3f99',
        opacity: 1
      },
      stroke: {
        color: '#FFFFFF'
      },
      radius: 12
    })
  }
  ],
  animated: true,
  hoverInteraction: false,
  displayAmount: true,
  selectedInteraction: true,
  maxFeaturesToSelect: 2,
  distance: 100,
  label: {
    font: 'bold 12px Comic Sans MS',
    color: '#FFFFFF'
  }
};

//Creación del estilo Cluster
let clusterStyleEmpresa = new M.style.Cluster(clusterOptionsEmpresa, vendorParameters);

//Creación del estilo composite
let compositeEmpresa = categoriaEmpresa.add(clusterStyleEmpresa);

//asignación del estilo final
empresa.setStyle(compositeEmpresa);


//Capa ise:Educar 

let educacion = new M.layer.WFS({
  url: "https://www.ideandalucia.es/services/ise/wfs?",
  namespace: "ise",
  name: "Estudiar",
  legend: "Estudiar",
  geometry: 'POINT',
  extract: true,

}
  , {
    vendor: {
      getFeature: {
        'propertyName': 'Nombre,Dependencia,Nivel1,Nivel2,Tipo,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'
      }
    }
  }
);

let estiloEducacion = new M.style.Point({
  radius: 4,
  fill: {
    color: '#B84949',
    opacity: 1
  },
  stroke: {
    color: '#FFFFFF'
  }
});

let educacionCentrosEspecificos = new M.style.Point({
  icon: {
    src: ' https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Educacion/centros_especificos.png'
  }
});

let educacionInfantil = new M.style.Point({
  icon: {
    src: ' https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Educacion/educacion.png'
  }
});

let educacionDistancia = new M.style.Point({
  icon: {
    src: ' https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Educacion/e_distancia.png'
  }
});

let educacionArtisticas = new M.style.Point({
  icon: {
    src: ' https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Educacion/e_artisticas.png'
  }
});

let educacionIdiomas = new M.style.Point({
  icon: {
    src: ' https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Educacion/escuela_oficial.png'
  }
});

let educacionPermanente = new M.style.Point({
  icon: {
    src: ' https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Educacion/educacion_permanente.png'
  }
});

let educacionFP = new M.style.Point({
  icon: {
    src: ' https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Educacion/formacion.png'
  }
});

let educacionUniversidades = new M.style.Point({
  icon: {
    src: ' https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Educacion/universidades.png'
  }
});

//Simbología categorizada

let categoriaEducacion = new M.style.Category("Nivel2", {
  "Centros específicos de educación especial": educacionCentrosEspecificos,
  "Educación infantil, primaria y/o secundaria": educacionInfantil,
  "EnseÃ±anza a distancia": educacionDistancia,
  "EnseÃ±anzas artísticas, deportivas": educacionArtisticas,
  "Escuela oficial de idiomas": educacionIdiomas,
  "Formación profesional": educacionFP,
  "Secciones y centros de educación permanente": educacionPermanente,
  "Universidades y facultades": educacionUniversidades
});

let clusterOptionsEducacion = {
  ranges: [{
    min: 2,
    max: 999,
    style: new M.style.Point({
      fill: {
        color: '#B84949',
        opacity: 1
      },
      stroke: {
        color: '#FFFFFF'
      },
      radius: 12
    })
  }
  ],
  animated: true,
  hoverInteraction: false,
  displayAmount: true,
  selectedInteraction: true,
  maxFeaturesToSelect: 2,
  distance: 30,
  label: {
    font: 'bold 12px Comic Sans MS',
    color: '#FFFFFF'
  }
};

let clusterStyleEducacion = new M.style.Cluster(clusterOptionsEducacion, vendorParameters);

let compositeEducacion = categoriaEducacion.add(clusterStyleEducacion);

educacion.setStyle(compositeEducacion);

let empleo = new M.layer.WFS({
  name: "Empleo",
  url: "https://www.ideandalucia.es/services/ise/wfs?",
  namespace: "ise",
  legend: "Empleo",
  geometry: 'POINT',
  extract: true
}, {
  vendor: {
    getFeature: {
      'propertyName': 'Nombre,Dependencia,Nivel1,Nivel2,Tipo,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'
    }
  }
});

let estiloEmpleo = new M.style.Point({
  radius: 4,
  fill: {
    color: '#d06d81',
    opacity: 1
  },
  stroke: {
    color: '#FFFFFF'
  }
});

//Asignación de Iconos

let empleoRelacionesLaborales = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Empleo/relaciones.png'
  }
});


//Simbología categorizada

let categoriaEmpleo = new M.style.Category("Nivel2", {
  "Relaciones laborales": empleoRelacionesLaborales
});



let clusterOptionsEmpleo = {
  ranges: [{
    min: 2,
    max: 100,
    style: new M.style.Point({
      fill: {
        color: '#d06d81',
        opacity: 1
      },
      stroke: {
        color: '#FFFFFF'
      },
      radius: 12
    })
  }
  ],
  animated: true,
  hoverInteraction: false,
  displayAmount: true,
  selectedInteraction: true,
  maxFeaturesToSelect: 2,
  distance: 100,
  label: {
    font: 'bold 12px Comic Sans MS',
    color: '#FFFFFF'
  }
};

let clusterStyleEmpleo = new M.style.Cluster(clusterOptionsEmpleo, vendorParameters);

let compositeEmpleo = categoriaEmpleo.add(clusterStyleEmpleo);

empleo.setStyle(compositeEmpleo);


let industria = new M.layer.WFS({
  name: "Industria_Minas",

  url: "https://www.ideandalucia.es/services/ise/wfs?",
  namespace: "ise",
  legend: "Industria y minas",
  geometry: 'POINT',
  extract: true
}, {
  vendor: {
    getFeature: {
      'propertyName': 'Nombre,Dependencia,Nivel1,Nivel2,Tipo,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'
    }
  }
});

let estiloIndustria = new M.style.Point({
  radius: 4,
  fill: {
    color: '#0468ea',
    opacity: 1
  },
  stroke: {
    color: '#FFFFFF'
  }
});

//Asignación de Iconos

let industriaITV = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Industria/itv.png'
  }
});


//Simbología categorizada

let categoriaIndustria = new M.style.Category("Nivel2", {
  "ITV": industriaITV
});



let clusterOptionsIndustria = {
  ranges: [{
    min: 2,
    max: 100,
    style: new M.style.Point({
      fill: {
        color: '#0468ea',
        opacity: 1
      },
      stroke: {
        color: '#FFFFFF'
      },
      radius: 12
    })
  }
  ],
  animated: true,
  hoverInteraction: false,
  displayAmount: true,
  selectedInteraction: true,
  maxFeaturesToSelect: 2,
  distance: 100,
  label: {
    font: 'bold 12px Comic Sans MS',
    color: '#FFFFFF'
  }
};

let clusterStyleIndustria = new M.style.Cluster(clusterOptionsIndustria, vendorParameters);

let compositeIndustria = categoriaIndustria.add(clusterStyleIndustria);

industria.setStyle(compositeIndustria);


//Capa ise:Investigación e Innovacion

let investigacion = new M.layer.WFS({
  name: "Investigacion_Innovacion",

  url: "https://www.ideandalucia.es/services/ise/wfs?",
  namespace: "ise",
  legend: "Investigación e innovación",
  geometry: 'POINT',
  extract: true
}, {
  vendor: {
    getFeature: {
      'propertyName': 'Nombre,Dependencia,Nivel1,Nivel2,Tipo,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'
    }
  }
});


//Asignación de Iconos

let investigacionInvestigacion = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Investigacion/investigacion.png'
  }
});

let investigacionLaboratorio = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Investigacion/laboratorio.png'
  }
});

let investigacionInnovacion = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Investigacion/innovacion.png'
  }
});

let investigacionConservacion = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Investigacion/conservacion.png'
  }
});


//Simbología categorizada

let categoriaInvestigacion = new M.style.Category("Nivel2", {
  "Conservación e investigación medio ambiental": investigacionConservacion,
  "Investigación y desarrollo": investigacionInvestigacion,
  "Innovación": investigacionInnovacion,
  "Laboratorios y control de calidad": investigacionLaboratorio
});

//Simbología Cluster
let clusterOptionsInvestigacion = {
  ranges: [{
    min: 2,
    max: 100,
    style: new M.style.Point({
      fill: {
        color: '#ff91f2',
        opacity: 1
      },
      stroke: {
        color: '#FFFFFF'
      },
      radius: 12
    })
  }
  ],
  animated: true,
  hoverInteraction: false,
  displayAmount: true,
  selectedInteraction: true,
  maxFeaturesToSelect: 2,
  distance: 100,
  label: {
    font: 'bold 12px Comic Sans MS',
    color: '#FFFFFF'
  }
};

//Creación del estilo Cluster
let clusterStyleInvestigacion = new M.style.Cluster(clusterOptionsInvestigacion, vendorParameters);

//Creación del estilo composite
let compositeInvestigacion = categoriaInvestigacion.add(clusterStyleInvestigacion);

//asignación del estilo final
investigacion.setStyle(compositeInvestigacion);

let justicia = new M.layer.WFS({
  url: "https://www.ideandalucia.es/services/ise/wfs?",
  namespace: "ise",
  name: "JusticiaSeguridadEmergencias",
  legend: "Justicia, seguridad y emergencias",
  cql: "Dependencia<>'Ayuntamiento' AND Dependencia<>'Ministerio del Interior' AND Tipo<>'Bomberos'",
  geometry: 'POINT',
  extract: true
}, {
  vendor: {
    getFeature: {
      'propertyName': 'Nombre,Dependencia,Nivel1,Nivel2,Tipo,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'
    }
  }
});


let estiloJusticia = new M.style.Point({
  radius: 4,
  fill: {
    color: '#d6b25e',
    opacity: 1
  },
  stroke: {
    color: '#FFFFFF'
  }
});

//Asignación de Iconos
let justiciaIncendios = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Justicia/control.png'
  }
});

let justiciaJuzgadosTribunales = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Justicia/juzgados.png'
  }
});

let justiciaOrdenPublicoEmergencias = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Justicia/orden_publico.png'
  }
});

//Simbología categorizada

let categoriaJusticia = new M.style.Category("Nivel2", {
  "Control y vigilancia de incendios": justiciaIncendios,
  "Juzgados y tribunales": justiciaJuzgadosTribunales,
  "Orden público y emergencias": justiciaOrdenPublicoEmergencias
});

let clusterOptionsJusticia = {
  ranges: [{
    min: 2,
    max: 500,
    style: new M.style.Point({
      fill: {
        color: '#d6b25e',
        opacity: 1
      },
      stroke: {
        color: '#FFFFFF'
      },
      radius: 12
    })
  }
  ],
  animated: true,
  hoverInteraction: false,
  displayAmount: true,
  selectedInteraction: true,
  maxFeaturesToSelect: 2,
  distance: 50,
  label: {
    font: 'bold 12px Comic Sans MS',
    color: '#FFFFFF'
  }
};

let clusterStyleJusticia = new M.style.Cluster(clusterOptionsJusticia, vendorParameters);

let compositeJusticia = categoriaJusticia.add(clusterStyleJusticia);

justicia.setStyle(compositeJusticia);


let medioAmbiente = new M.layer.WFS({
  name: "MedioAmbiente",

  url: "https://www.ideandalucia.es/services/ise/wfs?",
  namespace: "ise",
  legend: "Medio ambiente",
  geometry: 'POINT',
  extract: true
}, {
  vendor: {
    getFeature: {
      'propertyName': 'Nombre,Dependencia,Nivel1,Nivel2,Tipo,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'
    }
  }
});

//Asignación de Iconos


let medioAmbienteEducacionAmbientalCentrosInterpretacion = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/MedioAmbiente/educacion.png'
  }
});

let medioAmbienteMedioMarino = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/MedioAmbiente/medio_marino.png'
  }
});

let medioAmbienteRutasSenderos = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/MedioAmbiente/rutas.png'
  }
});
let medioAmbienteGestionResiduos = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/MedioAmbiente/7_59_residuos.png'
  }
});

//Simbología categorizada

let categoriaMedioAmbiente = new M.style.Category("Nivel2", {
  "Educación ambiental y centro de interpretación": medioAmbienteEducacionAmbientalCentrosInterpretacion,
  "Medio marino": medioAmbienteMedioMarino,
  "Rutas y senderos": medioAmbienteRutasSenderos,
  "Gestión de residuos": medioAmbienteGestionResiduos
});



let clusterOptionsMedioAmbiente = {
  ranges: [{
    min: 2,
    max: 100,
    style: new M.style.Point({
      fill: {
        color: '#3f9e7b',
        opacity: 1
      },
      stroke: {
        color: '#FFFFFF'
      },
      radius: 12
    })
  }
  ],
  animated: true,
  hoverInteraction: false,
  displayAmount: true,
  selectedInteraction: true,
  maxFeaturesToSelect: 2,
  distance: 100,
  label: {
    font: 'bold 12px Comic Sans MS',
    color: '#FFFFFF'
  }
};

let clusterStyleMedioAmbiente = new M.style.Cluster(clusterOptionsMedioAmbiente, vendorParameters);

let compositeMedioAmbiente = categoriaMedioAmbiente.add(clusterStyleMedioAmbiente);

medioAmbiente.setStyle(compositeMedioAmbiente);

let otros = new M.layer.WFS({
  name: "Otros",

  url: "https://www.ideandalucia.es/services/ise/wfs?",
  namespace: "ise",
  legend: "Otros",
  geometry: 'POINT',
  extract: true
}, {
  vendor: {
    getFeature: {
      'propertyName': 'Nombre,Dependencia,Nivel1,Nivel2,Tipo,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'
    }
  }
});

let estiloOtros = new M.style.Point({
  radius: 4,
  fill: {
    color: '#612408',
    opacity: 1
  },
  stroke: {
    color: '#FFFFFF'
  }
});

//Asignación de Iconos

let otrosInstalaciones = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Otros/instalaciones.png'
  }
});

let otrosOficinas = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Otros/oficinas.png'
  }
});

//Simbología categorizada

let categoriaOtros = new M.style.Category("Nivel2", {
  "Instalaciones auxiliares": otrosInstalaciones,
  "Oficinas ": otrosOficinas
});


let clusterOptionsOtros = {
  ranges: [{
    min: 2,
    max: 100,
    style: new M.style.Point({
      fill: {
        color: '#612408',
        opacity: 1
      },
      stroke: {
        color: '#FFFFFF'
      },
      radius: 12
    })
  }
  ],
  animated: true,
  hoverInteraction: false,
  displayAmount: true,
  selectedInteraction: true,
  maxFeaturesToSelect: 2,
  distance: 100,
  label: {
    font: 'bold 12px Comic Sans MS',
    color: '#FFFFFF'
  }
};

let clusterStyleOtros = new M.style.Cluster(clusterOptionsOtros, vendorParameters);

let compositeOtros = categoriaOtros.add(clusterStyleOtros);

otros.setStyle(compositeOtros);

let salud = new M.layer.WFS({
  name: "Salud",

  url: "https://www.ideandalucia.es/services/ise/wfs?",
  namespace: "ise",
  legend: "Salud",
  geometry: 'POINT',
  extract: true
}, {
  vendor: {
    getFeature: {
      'propertyName': 'Nombre,Dependencia,Nivel1,Nivel2,Tipo,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'
    }
  }
});

let estiloSalud = new M.style.Point({
  radius: 4,
  fill: {
    color: '#0b5404',
    opacity: 1
  },
  stroke: {
    color: '#FFFFFF'
  }
});

//Asignación de Iconos

let saludCentrosAntencionPrimaria = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Salud/centros_primaria.png'
  }
});

let saludCentrosPerifericosEspecialidades = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Salud/centros_especialidad.png'
  }
});
let saludDistritosSanitarios = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Salud/distritos.png'
  }
});

let saludHospitales = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Salud/hospital.png'
  }
});
let saludPrevencionRiesgos = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Salud/prevencion.png'
  }
});

//Simbología categorizada

let categoriaSalud = new M.style.Category("Nivel2", {
  "Centros de atención primaria": saludCentrosAntencionPrimaria,
  "Centros periféricos de especialidades": saludCentrosPerifericosEspecialidades,
  "Distritos sanitarios": saludDistritosSanitarios,
  "Hospitales": saludHospitales,
  "Seguridad y salud": saludPrevencionRiesgos
});

let clusterOptionsSalud = {
  ranges: [{
    min: 2,
    max: 200,
    style: new M.style.Point({
      fill: {
        color: '#0b5404',
        opacity: 1
      },
      stroke: {
        color: '#FFFFFF'
      },
      radius: 12
    })
  }
  ],
  animated: true,
  hoverInteraction: false,
  displayAmount: true,
  selectedInteraction: true,
  maxFeaturesToSelect: 2,
  distance: 50,
  label: {
    font: 'bold 12px Comic Sans MS',
    color: '#FFFFFF'
  }
};

let clusterStyleSalud = new M.style.Cluster(clusterOptionsSalud, vendorParameters);

let compositeSalud = categoriaSalud.add(clusterStyleSalud);

salud.setStyle(compositeSalud);

let social = new M.layer.WFS({
  name: "Servicios_Sociales",

  url: "https://www.ideandalucia.es/services/ise/wfs?",
  namespace: "ise",
  legend: "Servicios sociales",
  geometry: 'POINT',
  extract: true
}, {
  vendor: {
    getFeature: {
      'propertyName': 'Nombre,Tipo,Dependencia,Nivel1,Nivel2,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'
    }
  }
});

//Asignación de Iconos

let servSocialDiscapacidad = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/ServicioSocial/discapacidad.png'
  }
});

let servSocialAdicciones = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/ServicioSocial/drogodependencia.png'
  }
});

let servSocialPoblacion = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/ServicioSocial/poblacion.png'
  }
});

let servSocialMayores = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/ServicioSocial/mayores.png'
  }
});

let servSocialExclusion = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/ServicioSocial/exclusion.png'
  }
});

let servSocialSaludMental = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/ServicioSocial/saludmental.png'
  }
});

let servSocialMujeres = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/ServicioSocial/mujeres.png'
  }
});
let servSocialEtniaGitana = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/ServicioSocial/etniagitana.png'
  }
});

//Simbología categorizada

let categoriaSocial = new M.style.Category("Nivel2", {
  "Personas con discapacidad": servSocialDiscapacidad,
  "Personas con adicciones": servSocialAdicciones,
  "Población general": servSocialPoblacion,
  "Personas mayores": servSocialMayores,
  "Personas en situación o riesgo de exclusión social": servSocialExclusion,
  "Personas con enfermedad mental": servSocialSaludMental,
  "Mujeres": servSocialMujeres,
  "Personas De Etnia Gitana": servSocialEtniaGitana
});


let clusterOptionsSocial = {
  ranges: [{
    min: 2,
    max: 999,
    style: new M.style.Point({
      fill: {
        color: '#ac9393',
        opacity: 1
      },
      stroke: {
        color: '#FFFFFF'
      },
      radius: 12
    })
  }
  ],
  animated: true,
  hoverInteraction: false,
  displayAmount: true,
  selectedInteraction: true,
  maxFeaturesToSelect: 2,
  distance: 100,
  label: {
    font: 'bold 12px Comic Sans MS',
    color: '#FFFFFF'
  }
};

let clusterStyleSocial = new M.style.Cluster(clusterOptionsSocial, vendorParameters);

let compositeSocial = categoriaSocial.add(clusterStyleSocial);

social.setStyle(compositeSocial);


// ISE Transporte

let transporte = new M.layer.WFS({
  name: "Trafico_Transporte",

  url: "https://www.ideandalucia.es/services/ise/wfs?",
  namespace: "ise",
  legend: "Tráfico y transporte",
  geometry: 'POINT',
  extract: true
}, {
  vendor: {
    getFeature: {
      'propertyName': 'Nombre,Dependencia,Nivel1,Nivel2,Tipo,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'
    }
  }
});


//Asignación de Iconos

let transporteConservacionExplotacionCarreteras = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Transporte/conservacion.png'
  }
});

let transportePuertoRedLogisticaAeropuertos = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Transporte/puertos.png'
  }
});

//Simbología categorizada

let categoriaTransporte = new M.style.Category("Nivel2", {
  "Conservación y explotación de carreteras": transporteConservacionExplotacionCarreteras,
  "Puertos, red logística y aeropuertos": transportePuertoRedLogisticaAeropuertos
});


let clusterOptionsTransporte = {
  ranges: [{
    min: 2,
    max: 100,
    style: new M.style.Point({
      fill: {
        color: '#e8a032',
        opacity: 1
      },
      stroke: {
        color: '#FFFFFF'
      },
      radius: 12
    })
  }
  ],
  animated: true,
  hoverInteraction: false,
  displayAmount: true,
  selectedInteraction: true,
  maxFeaturesToSelect: 2,
  distance: 100,
  label: {
    font: 'bold 12px Comic Sans MS',
    color: '#FFFFFF'
  }
};

let clusterStyleTransporte = new M.style.Cluster(clusterOptionsTransporte, vendorParameters);

let compositeTransporte = categoriaTransporte.add(clusterStyleTransporte);

transporte.setStyle(compositeTransporte);

let turismo = new M.layer.WFS({
  name: "Turismo_Ocio",

  url: "https://www.ideandalucia.es/services/ise/wfs?",
  namespace: "ise",
  legend: "Turismo y ocio",
  geometry: 'POINT',
  extract: true
}, {
  vendor: {
    getFeature: {
      'propertyName': 'Nombre,Dependencia,Nivel1,Nivel2,Tipo,Titularidad,Horario,Direccion,Edificio,Localidad,Municipio,Provincia,Telefono,Fax,Correo_electronico,web,geom'
    }
  }
});


//Asignación de Iconos

let turismoActividadesRecreativasAlojamientos = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Turismo/actividades.png'
  }
});

let turismoEducacionPromocion = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Turismo/educacion1.png'
  }
});
let turismoResidencias = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Turismo/residencias.png'
  }
});

let turismoMenores = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Equipamientos/Turismo/albergue.png'
  }
});

//Simbología categorizada

let categoriaTurismo = new M.style.Category("Nivel2", {
  "Actividades recreativas y alojamientos": turismoActividadesRecreativasAlojamientos,
  "Educación y promoción": turismoEducacionPromocion,
  "Residencias de tiempo libre": turismoResidencias,
  "Menores y juventud": turismoMenores
});

let clusterOptionsTurismo = {
  ranges: [{
    min: 2,
    max: 100,
    style: new M.style.Point({
      fill: {
        color: '#f1396d',
        opacity: 1
      },
      stroke: {
        color: '#FFFFFF'
      },
      radius: 12
    })
  }
  ],
  animated: true,
  hoverInteraction: false,
  displayAmount: true,
  selectedInteraction: true,
  maxFeaturesToSelect: 2,
  distance: 100,
  label: {
    font: 'bold 12px Comic Sans MS',
    color: '#FFFFFF'
  }
};

let clusterStyleTurismo = new M.style.Cluster(clusterOptionsTurismo, vendorParameters);

let compositeTurismo = categoriaTurismo.add(clusterStyleTurismo);

turismo.setStyle(compositeTurismo);

//registros

let registros = new M.layer.WFS({
  name: "Registros",
  url: "https://www.ideandalucia.es/services/ise/wfs?",
  namespace: "ise",
  name: "Registros",
  geometry: 'MPOINT',
  extract: true
}, {
  vendor: {
    getFeature: {
      'propertyName': 'Nombre,Horario,Direccion,Foto,geom'
    }
  }
});

let estiloRegistros = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Sedes/svg/logo8.svg'
  }
});

let clusterOptionsRegistros = {
  ranges: [{
    min: 2,
    max: 100,
    style: new M.style.Point({
      fill: {
        color: '#638c27',
        opacity: 1
      },
      stroke: {
        color: '#FFFFFF'
      },
      radius: 12
    })
  }
  ],
  animated: true,
  hoverInteraction: false,
  displayAmount: true,
  selectedInteraction: true,
  maxFeaturesToSelect: 2,
  distance: 100,
  label: {
    font: 'bold 12px Comic Sans MS',
    color: '#FFFFFF'
  }
};

let clusterStyleRegistros = new M.style.Cluster(clusterOptionsRegistros, vendorParameters);

registros.setStyle(estiloRegistros);
registros.setStyle(clusterStyleRegistros);


//buzones

let buzones = new M.layer.WFS({
  name: "Buzones",
  url: "https://www.ideandalucia.es/services/ise/wfs?",
  namespace: "ise",
  name: "Buzones",
  geometry: 'MPOINT',
  extract: true
}, {
  vendor: {
    getFeature: {
      'propertyName': 'Nombre,Horario,Direccion,Foto,geom'
    }
  }
});

let estiloBuzones = new M.style.Point({
  icon: {
    //src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Sedes/logo_Buzon.png'
    //src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Sedes2/postal.png'
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Sedes/svg/logo6.svg'
  }
});

let clusterOptionsBuzones = {
  ranges: [{
    min: 2,
    max: 100,
    style: new M.style.Point({
      fill: {
        color: '#699923',
        opacity: 1
      },
      stroke: {
        color: '#224d19'
      },
      radius: 12
    })
  }
  ],
  animated: true,
  hoverInteraction: false,
  displayAmount: true,
  selectedInteraction: true,
  maxFeaturesToSelect: 2,
  distance: 100,
  label: {
    font: 'bold 12px Comic Sans MS',
    color: '#FFFFFF'
  }
};

let clusterStyleBuzones = new M.style.Cluster(clusterOptionsBuzones, vendorParameters);

buzones.setStyle(estiloBuzones);
buzones.setStyle(clusterStyleBuzones);

// delegaciones 
let delegaciones = new M.layer.WFS({
  name: "Delegaciones",
  url: "https://www.ideandalucia.es/services/ise/wfs?",
  namespace: "ise",
  name: "Delegaciones",
  geometry: 'MPOINT',
  extract: true
}, {
  vendor: {
    getFeature: {
      'propertyName': 'Nombre,Sede,Direccion,Telefono,Fax,Correo_electronico,web,Foto,geom'
    }
  }
});

let estiloDelegaciones = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Sedes/svg/logo4.svg'
  }
});

let clusterOptionsDelegaciones = {
  ranges: [{
    min: 2,
    max: 100,
    style: new M.style.Point({
      fill: {
        color: '#9ed898',
        opacity: 1
      },
      stroke: {
        color: '#FFFFFF'
      },
      radius: 12
    })
  }
  ],
  animated: true,
  hoverInteraction: false,
  displayAmount: true,
  selectedInteraction: true,
  maxFeaturesToSelect: 2,
  distance: 100,
  label: {
    font: 'bold 12px Comic Sans MS',
    color: '#FFFFFF'
  }
};

let clusterStyleDelegaciones = new M.style.Cluster(clusterOptionsDelegaciones, vendorParameters);

delegaciones.setStyle(estiloDelegaciones);
delegaciones.setStyle(clusterStyleDelegaciones);


//ArchivosCentrales 
let archivos = new M.layer.WFS({
  name: "ArchivosCentrales",
  url: "https://www.ideandalucia.es/services/ise/wfs?",
  namespace: "ise",
  name: "Archivos_Centrales",
  geometry: 'MPOINT',
  extract: true
}, {
  vendor: {
    getFeature: {
      'propertyName': 'Nombre,Horario,Direccion,Telefono,Fax,Correo_electronico,web,Foto,geom'
    }
  }
});

let estiloArchivos = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Sedes/svg/logo7.svg'
  }
});

let clusterOptionsArchivos = {
  ranges: [{
    min: 2,
    max: 100,
    style: new M.style.Point({
      fill: {
        color: '#95cd43',
        opacity: 1
      },
      stroke: {
        color: '#FFFFFF'
      },
      radius: 12
    })
  }
  ],
  animated: true,
  hoverInteraction: false,
  displayAmount: true,
  selectedInteraction: true,
  maxFeaturesToSelect: 2,
  distance: 100,
  label: {
    font: 'bold 12px Comic Sans MS',
    color: '#FFFFFF'
  }
};

let clusterStyleArchivos = new M.style.Cluster(clusterOptionsArchivos, vendorParameters);

archivos.setStyle(estiloArchivos);
archivos.setStyle(clusterStyleArchivos);

//Organizacion Institucional
let organizacionInstitucional = new M.layer.WFS({
  name: "OrganizacionInstitucional",
  url: "https://www.ideandalucia.es/services/ise/wfs?",
  namespace: "ise",
  name: "Organizacion_institucional",
  geometry: 'MPOINT',
  extract: true
}, {
  vendor: {
    getFeature: {
      'propertyName': 'Nombre,Direccion,Telefono,Fax,Correo_electronico,web,Foto,geom'
    }
  }
});



//AsignaciÃ³n de Iconos

let camaraCuentas = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Sedes/svg/logo9.svg'
  }
});

let consejoAudioVisual = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Sedes/svg/logo10.svg'
  }
});
let consejoConsultivo = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Sedes/svg/logo13.svg'
  }
});

let consejoTransparecia = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Sedes/svg/logo14.svg'
  }
});

let consejoEconomico = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Sedes/svg/logo11.svg'
  }
});

let defensorPueblo = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Sedes/svg/logo12.svg'
  }
});

let parlamentoAndalucia = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Sedes/svg/logo5.svg'
  }
});

//Simbología categorizada

let categoriaOrganizacionInstitucional = new M.style.Category("Nombre", {
  "Cámara de Cuentas de Andalucía": camaraCuentas,
  "Consejo Audiovisual de Andalucía": consejoAudioVisual,
  "Consejo Consultivo de Andalucía": consejoConsultivo,
  "Consejo de Transparencia y Protección de Datos de Andalucía": consejoTransparecia,
  "Consejo Ecnómico y Social de Andalucía": consejoEconomico,
  "Defensor del Pueblo Andaluz": defensorPueblo,
  "Parlamento de Andalucía": parlamentoAndalucia
});



let clusterOptionsOrganizacionInstitucional = {
  ranges: [{
    min: 2,
    max: 100,
    style: new M.style.Point({
      fill: {
        color: '#3e4730',
        opacity: 1
      },
      stroke: {
        color: '#FFFFFF'
      },
      radius: 12
    })
  }
  ],
  animated: true,
  hoverInteraction: false,
  displayAmount: true,
  selectedInteraction: true,
  maxFeaturesToSelect: 2,
  distance: 100,
  label: {
    font: 'bold 12px Comic Sans MS',
    color: '#FFFFFF'
  }
};

let clusterStyleOrganizacionInstitucional = new M.style.Cluster(clusterOptionsOrganizacionInstitucional, vendorParameters);

let compositeOrganizacionInstitucional = categoriaOrganizacionInstitucional.add(clusterStyleOrganizacionInstitucional);

organizacionInstitucional.setStyle(compositeOrganizacionInstitucional);

//consejerías
let consejerias = new M.layer.WFS({
  name: "Consejerias",
  url: "https://www.ideandalucia.es/services/ise/wfs?",
  namespace: "ise",
  name: "Consejerias",
  geometry: 'MPOINT',
  extract: true
}, {
  vendor: {
    getFeature: {
      'propertyName': 'Nombre,Sede,Direccion,Telefono,Fax,Correo_electronico,web,Foto,geom'
    }
  }
});

let estiloConsejerias = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Sedes/svg/logo1.svg'
  }
});


let clusterOptionsConsejerias = {
  ranges: [{
    min: 2,
    max: 100,
    style: new M.style.Point({
      fill: {
        color: '#1d8641',
        opacity: 1
      },
      stroke: {
        color: '#FFFFFF'
      },
      radius: 12
    })
  }
  ],
  animated: true,
  hoverInteraction: false,
  displayAmount: true,
  selectedInteraction: true,
  maxFeaturesToSelect: 2,
  distance: 100,
  label: {
    font: 'bold 12px Comic Sans MS',
    color: '#FFFFFF'
  }
};

let clusterStyleConsejerias = new M.style.Cluster(clusterOptionsConsejerias, vendorParameters);

consejerias.setStyle(estiloConsejerias);
consejerias.setStyle(clusterStyleConsejerias);


//organismos

let organismos = new M.layer.WFS({
  name: "Organismos",
  url: "https://www.ideandalucia.es/services/ise/wfs?",
  namespace: "ise",
  name: "Organismos",
  geometry: 'MPOINT',
  extract: true
}, {
  vendor: {
    getFeature: {
      'propertyName': 'Nombre,Sede,Tipo,Sigla,Consejeria,Direccion,Telefono,Fax,Correo_electronico,web,Foto,geom'
    }
  }
});

let estiloOrganismos = new M.style.Point({
  icon: {
    src: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/mapa_equipamientos/geolocalizacion/iconos/Sedes/svg/logo2.svg'
  }
});

let clusterOptionsOrganismos = {
  ranges: [{
    min: 2,
    max: 500,
    style: new M.style.Point({
      fill: {
        color: '#456319',
        opacity: 1
      },
      stroke: {
        color: '#FFFFFF'
      },
      radius: 12
    })
  }
  ],
  animated: true,
  hoverInteraction: false,
  displayAmount: true,
  selectedInteraction: true,
  maxFeaturesToSelect: 2,
  distance: 100,
  label: {
    font: 'bold 12px Comic Sans MS',
    color: '#FFFFFF'
  }
};

let clusterStyleOrganismos = new M.style.Cluster(clusterOptionsOrganismos, vendorParameters);

organismos.setStyle(estiloOrganismos);
organismos.setStyle(clusterStyleOrganismos);

/* FIN DEFINICIÓN LAYERS VECTOR*/


/*INICIO CONFIGURACION PLUGIN */

/* Select Anidado con Option Group**/
const configOrtofotografias1 = {
  title: 'Ortofotografías de Andalucía',
  label: 'Año',
  group: true,
  data: [
    {
      name: 'Año 2016',
      layerGroups: [
        {
          group: 'Año 2016',
          layers: [
            ortofoto2016_pancromatica,
            ortofoto2016_infrarrojo,
            ortofoto2016_color
          ]
        }
      ]
    },
    {
      name: 'Año 2013',
      layerGroups: [
        {
          group: 'Año 2013',
          layers: [
            ortofoto2013_color
          ]
        }
      ]
    },
    {
      name: 'Año 2011',
      layerGroups: [
        {
          group: 'Año 2011',
          layers: [
            ortofoto2011_color
          ]
        }
      ]
    },
    {
      name: 'Año 2009',
      layerGroups: [
        {
          group: 'Año 2009',
          layers: [
            ortofoto2009_color
          ]
        }
      ]
    },
    {
      name: 'Año 2007',
      layerGroups: [
        {
          group: 'Año 2007',
          layers: [
            ortofoto2007_color
          ]
        }
      ]
    },
    {
      name: 'Año 2004',
      layerGroups: [
        {
          group: 'Año 2004',
          layers: [
            ortofoto2004_color
          ]
        }
      ]
    },
    {
      name: 'Año 2001',
      layerGroups: [
        {
          group: 'Año 2001',
          layers: [
            ortofoto2001_pancromatica
          ]
        }
      ]
    },
    {
      name: 'Año 1998',
      layerGroups: [
        {
          group: 'Año 1998',
          layers: [
            ortofoto1998_color
          ]
        }
      ]
    },
    {
      name: 'Año 1956',
      layerGroups: [
        {
          group: 'Año 1956',
          layers: [
            ortofoto1956_pancromatica
          ]
        }
      ]
    }
  ]
}

const configISEEquipamientos1 = {
  image:"https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/images/andaluciasemueveconeuropa.png",
  image_alt:"Andalucía se mueve con Europa",
  title: 'Inventario de Sedes y Equipamientos',
  label: 'ISE',
  group: true,
  data: [
    {
      name: 'Sedes Administrativas',
      layerGroups: [
        {
          group: 'Sedes',
          layers: [
            registros,
            buzones,
            delegaciones,
            archivos,
            organizacionInstitucional,
            consejerias,
            organismos
          ]
        }
      ]
    },
    {
      name: 'Equipamientos',
      layerGroups: [
        {
          group: 'Centros y equipamientos',
          layers: [
            agricultura,
            cultura,
            empresa,
            educacion,
            empleo,
            industria,
            investigacion,
            justicia,
            medioAmbiente,
            otros,
            salud,
            social,
            tecnologia,
            transporte,
            turismo
          ]
        }
      ]
    }
  ]
}
/* Select Anidado y sin Option Group**/
const configOrtofotografias2 = {
  title: 'Ortofotografías de Andalucía',
  label: 'Año',
  group: false,
  data: [
    {
      name: 'Año 2016',
      layers: [
        ortofoto2016_color,
        ortofoto2016_pancromatica,
        ortofoto2016_infrarrojo
      ]
    },
    {
      name: 'Año 2013',
      layers: [
        ortofoto2013_color
      ]
    },
    {
      name: 'Año 2011',
      layers: [
        ortofoto2011_color
      ]
    },
    {
      name: 'Año 2009',
      layers: [
        ortofoto2009_color
      ]
    },
    {
      name: 'Año 2007',
      layers: [
        ortofoto2007_color
      ]
    },
    {
      name: 'Año 2004',
      layers: [
        ortofoto2004_color
      ]
    },
    {
      name: 'Año 2001',
      layers: [
        ortofoto2001_pancromatica
      ]
    },
    {
      name: 'Año 1998',
      layer: [
        ortofoto1998_color
      ]
    },
    {
      name: 'Año 1956',
      layers: [
        ortofoto1956_pancromatica
      ]
    }
  ]
}

const configISEEquipamientos2 = {
  title: 'Inventario de Sedes y Equipamientos de Andalucía',
  label: 'ISE',
  group: false,
  data: [
    {
      name: 'Sedes',
      layers: [
        registros,
        buzones,
        delegaciones,
        archivos,
        organizacionInstitucional,
        consejerias,
        organismos
      ]
    },
    {
      name: 'Equipamientos',
      layers: [
        agricultura,
        cultura,
        empresa,
        educacion,
        empleo,
        industria,
        investigacion,
        justicia,
        medioAmbiente,
        otros,
        salud,
        social,
        tecnologia,
        transporte,
        turismo
      ]
    }
  ]
}
/* Select no Anidado con Option Group**/
const configOrtofotografias3 = {
  title: 'Ortofotografías de Andalucía',
  label: 'Año',
  group: true,
  data:
  {
    name: 'Año 2016',
    layerGroups: [
      {
        group: 'Año 2016',
        layers: [
          ortofoto2016_color,
          ortofoto2016_pancromatica,
          ortofoto2016_infrarrojo
        ]
      },
      {
        group: 'Año 2013',
        layers: [
          ortofoto2013_color
        ]
      },
      {
        group: 'Año 2011',
        layers: [
          ortofoto2011_color
        ]
      },
      {
        group: 'Año 2009',
        layers: [
          ortofoto2009_color
        ]
      }
      , {
        group: 'Año 2007',
        layers: [
          ortofoto2007_color
        ]
      }
      , {
        group: 'Año 2004',
        layers: [
          ortofoto2004_color
        ]
      }, {
        group: 'Año 2001',
        layers: [
          ortofoto2001_pancromatica
        ]
      },
      {
        group: 'Año 1998',
        layers: [
          ortofoto1998_color
        ]
      },
      {
        group: 'Año 1956',
        layers: [
          ortofoto1956_pancromatica
        ]
      }
    ]
  }
}

const configISEEquipamientos3 = {
  title: 'Inventario de Sedes y Equipamientos de Andalucía',
  label: 'ISE',
  group: true,
  data:
  {
    name: 'ISE',
    layerGroups: [
      {
        group: 'Sedes',
        layers: [
          registros,
          buzones,
          delegaciones,
          archivos,
          organizacionInstitucional,
          consejerias,
          organismos
        ]
      },
      {
        group: 'Equipamientos',
        layers: [
          agricultura,
          cultura,
          empresa,
          educacion,
          empleo,
          industria,
          investigacion,
          justicia,
          medioAmbiente,
          otros,
          salud,
          social,
          tecnologia,
          transporte,
          turismo
        ]
      }
    ]
  }
}
/* Select no Anidado sin Option Group**/
const configOrtofotografias4 = {
  title: 'Ortofotografías de Andalucía',
  image:"https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/images/andaluciasemueveconeuropa.png",
  image_alt:"Andalucía se mueve con Europa",  
  label: 'Año',
  group: false,
  data:
  {
    name: 'Año 2016',
    layers: [
      ortofoto2016_color,
      ortofoto2016_pancromatica,
      ortofoto2016_infrarrojo,
      ortofoto2013_color,
      ortofoto2011_color,
      ortofoto2009_color,
      ortofoto2007_color,
      ortofoto2004_color,
      ortofoto2001_pancromatica,
      ortofoto1998_color,
      ortofoto1956_pancromatica
    ]
  }
}

const configDirectorioEmpresas = {
  title: 'Geolocalización de Establecimientos de 50 o más Asalariados. Directorio de Empresas y Establecimientos',
  label: 'Directorio de Empresas',
  group: false,
  data: {
    name: 'Directorio de Empresas',
    layers: [
      direst_comercio_2018,
      direst_construccion_2018,
      direst_energia_2018,
      direst_hosteleria_2018,
      direst_industria_2018,
      direst_servicios_2018,
      direst_transporte_2018
    ]
  }
}

const configTipologiasConstrucctivas = {
  title: 'Tipologías constructivas de catastro en malla estadística',
  label: 'Tipologías constructivas de catastro en malla estadística',
  group: false,
  data: {
    name: 'Tipologias Construcctivas',
    layers: [
      viviendas_colectivas,
      viviendas_unifamiliares,
      edificiacion_rural,
      garages_viviendas,
      otros_garajes,
      industrial,
      oficinas,
      comercio,
      deporte,
      piscinas,
      espectaculos,
      hosteleria_ocio,
      sanitarios_beneficos,
      culturales,
      religiosos,
      singulares,
      campo_golf
    ]
  }
}

const configISEEquipamientos4 = {
  title: 'Invetario de Equipamientos',
  label: 'Año',
  group: false,
  data:
  {
    name: 'ISE Equipamientos',
    layers: [
      agricultura,
      cultura,
      empresa,
      educacion,
      empleo,
      industria,
      investigacion,
      justicia,
      medioAmbiente,
      otros,
      salud,
      social,
      tecnologia,
      transporte,
      turismo,
    ]
  }
}



/*FIN CONFIGURACION PLUGIN */


/* Select Anidado con Option Group**/
const mp = new Inputselectaddlayer(configOrtofotografias1);
//const mp = new Inputselectaddlayer(configISEEquipamientos1);
/* Select Anidado y sin Option Group**/
//const mp = new Inputselectaddlayer(configOrtofotografias2);
//const mp = new Inputselectaddlayer(configISEEquipamientos2);
/* Select no Anidado con Option Group**/
//const mp = new Inputselectaddlayer(configOrtofotografias3);
//const mp = new Inputselectaddlayer(configISEEquipamientos3);
/* Select no Anidado sin Option Group**/
//const mp = new Inputselectaddlayer(configOrtofotografias4);
//const mp = new Inputselectaddlayer(configDirectorioEmpresas);
//const mp = new Inputselectaddlayer(configTipologiasConstrucctivas);
// const mp = new Inputselectaddlayer(configISEEquipamientos4);

const simpleLegend = new M.plugin.Simplelegend()

map.addPlugin(simpleLegend)

map.addPlugin(mp);

mp.on(M.evt.ADDED_TO_MAP, () => {
  console.log('se cargo el plugin');
})


mp.on(M.evt.LOAD, () => {
  console.log('se cargo una capa');
})


