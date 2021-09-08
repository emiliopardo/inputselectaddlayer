import Inputselectaddlayer from 'facade/inputselectaddlayer';

const map = M.map({
  container: 'mapjs',
});

map.addControls(['ScaleLine', 'Mouse', 'panzoombar', 'layerSwitcher']);

const configDirectorioEmpresas = {
  title: 'Directorio de empresas y establecimientos con actividad económica en Andalucía. \nGeolocalización de los establecimientos de 50 o más asalariados a 01/01/2018',
  group: false,
  layers: [
    {
      id: 1,
      name: 'direst_transporte_2018',
      title: 'Sector Transporte y almacenamiento',
      style: 'direst_transporte',
      url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/direst/wms?',
    },
    {
      id: 2,
      name: 'direst_servicios_2018',
      title: 'Sector Servicios sanitarios, educativos y resto de servicios',
      style: 'direst_servicios',
      url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/direst/wms?',
    },
    {
      id: 3,
      name: 'direst_industria_2018',
      title: 'Sector Industria',
      style: 'direst_industria',
      url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/direst/wms?',
    },
    {
      id: 4,
      name: 'direst_hosteleria_2018',
      title: 'Sector Hostelería',
      style: 'direst_hosteleria',
      url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/direst/wms?',
    },
    {
      id: 5,
      name: 'direst_energia_2018',
      title: 'Sector Energía, agua y resíduos',
      style: 'direst_energia',
      url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/direst/wms?',
    },
    {
      id: 6,
      name: 'direst_construccion_2018',
      title: 'Sector Construcción',
      style: 'direst_construccion',
      url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/direst/wms?',
    },
    {
      id: 7,
      name: 'direst_comercio_2018',
      title: 'Sector Comercio',
      style: 'direst_comercio',
      url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/direst/wms?',
    }
  ]
}

const configTipologiasConstrucctivas = {
  title: 'Tipologías constructivas de catastro en malla estadística',
  group: false,
  layers: [
    {
      id: 1,
      name: 'gridcattp_250',
      title: 'Viviendas colectivas. Urbano',
      style: 'stl_c011_viviendas_colectivas',
      url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    },
    {
      id: 2,
      name: 'gridcattp_250',
      title: 'Viviendas unifamiliares. Urbano',
      style: 'stl_c012_viviendas_unifamiliares',
      url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    },
    {
      id: 3,
      name: 'gridcattp_250',
      title: 'Edificación rural',
      style: 'stl_c013_edificiacion_rural',
      url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?'
    },
    {
      id: 4,
      name: 'gridcattp_250',
      title: 'Garajes viviendas',
      style: 'stl_c01G_garages_viviendas',
      url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    },
    {
      id: 5,
      name: 'gridcattp_250',
      title: 'Otros garajes y aparcamientos',
      style: 'stl_c022_otros_garajes',
      url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    },
    {
      id: 6,
      name: 'gridcattp_250',
      title: 'Industrial',
      style: 'stl_c02_industrial',
      url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    },
    {
      id: 7,
      name: 'gridcattp_250',
      title: 'Oficinas',
      style: 'stl_c03_oficinas',
      url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    },
    {
      id: 8,
      name: 'gridcattp_250',
      title: 'Comercio',
      style: 'stl_c04_comercio',
      url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    },
    {
      id: 9,
      name: 'gridcattp_250',
      title: 'Deportes',
      style: 'stl_c05_Deportes',
      url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    },
    {
      id: 10,
      name: 'gridcattp_250',
      title: 'Piscinas',
      style: 'stl_c05P_piscinas',
      url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    },
    {
      id: 11,
      name: 'gridcattp_250',
      title: 'Espectáculos',
      style: 'stl_c06_espectaculos',
      url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    },
    {
      id: 12,
      name: 'gridcattp_250',
      title: 'Hostelería y Ocio',
      style: 'stl_c07_hosteleria_ocio',
      url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    },
    {
      id: 13,
      name: 'gridcattp_250',
      title: 'Sanitarios, asistenciales y benéficos',
      style: 'stl_c08_sanitarios_beneficos',
      url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    },
    {
      id: 14,
      name: 'gridcattp_250',
      title: 'Culturales',
      style: 'stl_c09_culturales',
      url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    },
    {
      id: 15,
      name: 'gridcattp_250',
      title: 'Religiosos',
      style: 'stl_c093_religioso',
      url: 'http://ww.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    },
    {
      id: 16,
      name: 'gridcattp_250',
      title: 'Singulares',
      style: 'stl_c10_singulares',
      url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    },
    {
      id: 17,
      name: 'gridcattp_250',
      title: 'Campos de golf',
      style: 'stl_c1034_golf',
      url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcattp/wms?',
    }
  ]
}

const configOrtofotografias = {
  title: 'Ortofotografías Digitales de Andalucía',
  group: true,
  type: 'optiongroup',
  layerGroups: [
    {
      group: 'Año 2016',
      layers: [
        {
          id: 9,
          name: 'ortofotografia_2016_pancromatico',
          title: 'Ortofotografía Pancromática 0,5 metros/pixel (Año 2016)',
          style: 'default',
          url: 'http://www.ideandalucia.es/wms/ortofoto2016?'
        },
        {
          id: 10,
          name: 'ortofotografia_2016_rgb',
          title: 'Ortofotografía Color 0,5 metros/pixel (Año 2016)',
          style: 'default',
          url: 'http://www.ideandalucia.es/wms/ortofoto2016?'
        },
        {
          id: 11,
          name: 'ortofotografia_2016_infrarrojo',
          title: 'Ortofotografía Infrarrojo 0,5 metros/pixel (Año 2016)',
          style: 'default',
          url: 'http://www.ideandalucia.es/wms/ortofoto2016?'
        }
      ]
    },
    {
      group: 'Año 2013',
      layers: [
        {
          id: 8,
          name: 'OCA05_2013',
          title: 'Ortofotografía en Color 0,5 metros/pixel (Año 2013)',
          style: 'default',
          url: 'http://www.ideandalucia.es/wms/ortofoto2013?'
        }
      ]
    },
    {
      group: 'Año 2011',
      layers: [
        {
          id: 7,
          name: 'OCA10_2010',
          title: 'Ortofotografía en Color 0,5 metros/pixel (Año 2011)',
          style: 'default',
          url: 'http://www.ideandalucia.es/wms/ortofoto2010?'
        }
      ]
    },
    {
      group: 'Año 2009',
      layers: [
        {
          id: 6,
          name: 'OCA10_2009',
          title: 'Ortofotografía en Color 0,5 metros/pixel (Año 2009)',
          style: 'default',
          url: 'http://www.ideandalucia.es/wms/ortofoto2009?'
        }
      ]
    },
    {
      group: 'Año 2007',
      layers: [
        {
          id: 5,
          name: 'ORTO_2007',
          title: 'Ortofotografía en Color 1 metro/pixel (Año 2007)',
          style: 'default',
          url: 'http://www.ideandalucia.es/wms/ortofoto2007?'
        }
      ]
    },
    {
      group: 'Año 2004',
      layers: [
        {
          id: 4,
          name: 'ORTO_2004',
          title: 'Ortofotografía en Color 1 metro/pixel (Año 2004)',
          style: 'default',
          url: 'http://www.ideandalucia.es/wms/ortofoto2004?'
        }
      ]
    },
    {
      group: 'Año 2001',
      layers: [
        {
          id: 3,
          name: 'ORTO_2001',
          title: 'Ortofotografía Pancromática 0,5 metros/pixel  (Año 2001)',
          style: 'default',
          url: 'http://www.ideandalucia.es/wms/ortofoto2001?'
        }
      ]
    },
    {
      group: 'Año 1998',
      layers: [
        {
          id: 2,
          name: 'ortofoto1998',
          title: 'Ortofotografía en Color 1 metro/pixel (Año 1998)',
          style: 'default',
          url: 'http://www.ideandalucia.es/wms/ortofoto1998?'
        }
      ]
    },
    {
      group: 'Año 1956',
      layers: [
        {
          id: 1,
          name: 'REDIAM',
          title: 'Ortofotografía Pancromática 1 metro/pixel (Año 1956)',
          style: 'default',
          url: 'http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_Ortofoto_Andalucia_1956?'
        }
      ]
    },
  ]
}

const configCaracterizacionEspacioConstruido = {
  title: 'Caracterización y distribución del espacio construido en Andalucía. Viviendas',
  group: true,
  type: 'optiongroup',
  layerGroups: [
    {
      group: 'Número de viviendas',
      layers: [
        {
          id: 1,
          name: 'gridcatv_250',
          title: 'Número total de viviendas',
          style: 'stl_viviendas_nviv',
          url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcatv/wms?',
        },
        {
          id: 2,
          name: 'gridcatv_250',
          title: 'Superficie de las viviendas (Mediana)',
          style: 'stl_viviendas_m2viv_mediana',
          url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcatv/wms?',
        },
        {
          id: 3,
          name: 'gridcatv_250',
          title: 'Superficie total de las viviendas',
          style: 'stl_viviendas_m2viv_total',
          url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcatv/wms?',
        }
      ]
    },
    {
      group: 'Antigüedad de la vivienda',
      layers: [
        {
          id: 4,
          name: 'gridcatv_250',
          title: 'Año de antigüedad (mediana)',
          style: 'stl_viviendas_m2viv_total',
          url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcatv/wms?',
        }
      ]
    },
    {
      group: 'Tipologías constructivas',
      layers: [
        {
          id: 5,
          name: 'gridcatv_250',
          title: 'Número de viviendas colectivas',
          style: 'stl_viviendas_nvivpluri',
          url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcatv/wms?',
        },
        {
          id: 6,
          name: 'gridcatv_250',
          title: 'Número de viviendas unifamiliares aisladas o pareadas',
          style: 'stl_viviendas_nvivunif1',
          url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcatv/wms?',
        },
        {
          id: 7,
          name: 'gridcatv_250',
          title: 'Número de viviendas unifamiliares en líneas o manzana cerrada',
          style: 'stl_viviendas_nvivunif2',
          url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcatv/wms?',
        }
      ]
    },
    {
      group: 'Viviendas con piscina',
      layers: [
        {
          id: 8,
          name: 'gridcatv_250',
          title: 'Número de viviendas con piscina',
          style: 'stl_viviendas_nviv_h2o',
          url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcatv/wms?',
        },
        {
          id: 9,
          name: 'gridcatv_250',
          title: 'Número de viviendas con piscina de uso unifamiliar',
          style: 'stl_viviendas_nvivh2ouni',
          url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcatv/wms?',
        },
        {
          id: 10,
          name: 'gridcatv_250',
          title: 'Número de viviendas con piscina de uso comunitario',
          style: 'stl_viviendas_nvivh2ocom',
          url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcatv/wms?',
        }
      ]
    },
    {
      group: 'Viviendas con espacios abiertos',
      layers: [
        {
          id: 11,
          name: 'gridcatv_250',
          title: 'Número de viviendas en parcelas con espacios abiertos (patio/jardín)',
          style: 'stl_viviendas_nviv_ea',
          url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcatv/wms?',
        },
        {
          id: 12,
          name: 'gridcatv_250',
          title: 'Número de viviendas unifamiliares en parcelas con espacio abierto (patio/jardí­n)',
          style: 'stl_viviendas_nvivuni_ea',
          url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcatv/wms?',
        },
        {
          id: 13,
          name: 'gridcatv_250',
          title: 'Número de viviendas plurifamiliares en parcelas con espacio abierto (patio/jardí­n)',
          style: 'stl_viviendas_nvivplu_ea',
          url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcatv/wms?',
        }
      ]
    },
    {
      group: 'Viviendas con garaje',
      layers: [
        {
          id: 14,
          name: 'gridcatv_250',
          title: 'Número de viviendas en parcelas con garaje',
          style: 'stl_viviendas_nviv_app',
          url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcatv/wms?',
        },
        {
          id: 15,
          name: 'gridcatv_250',
          title: 'Número de viviendas unifamiliares en parcelas con garaje',
          style: 'stl_viviendas_nvivuniapp',
          url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcatv/wms?',
        },
        {
          id: 16,
          name: 'gridcatv_250',
          title: 'Número de viviendas plurifamiliares en parcelas con garaje',
          style: 'stl_viviendas_nvivpluapp',
          url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcatv/wms?',
        }
      ]
    }
  ]
}

const mp = new Inputselectaddlayer(configOrtofotografias);
//const mp = new Inputselectaddlayer(configDirectorioEmpresas);
//const mp = new Inputselectaddlayer(configTipologiasConstrucctivas);
// const mp = new Inputselectaddlayer(configCaracterizacionEspacioConstruido);


map.addPlugin(mp);
