import Inputselectaddlayer from 'facade/inputselectaddlayer';

const map = M.map({
  container: 'mapjs',
});

const configSelectAddLayer = {
  group: true,
  type: 'optiongroup',
  layerGroups: [
    {
      group: 'Número de viviendas',
      layers: [
        {
          name: 'gridcatv_250',
          title: 'Número total de viviendas',
          style: 'stl_viviendas_nviv',
          url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcatv/wms?',
        },
        {
          name: 'gridcatv_250',
          title: 'Superficie de las viviendas (Mediana)',
          style: 'stl_viviendas_m2viv_mediana',
          url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcatv/wms?',
        },
        {
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
          name: 'gridcatv_250',
          title: 'Número de viviendas colectivas',
          style: 'stl_viviendas_nvivpluri',
          url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcatv/wms?',
        },
        {
          name: 'gridcatv_250',
          title: 'Número de viviendas unifamiliares aisladas o pareadas',
          style: 'stl_viviendas_nvivunif1',
          url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcatv/wms?',
        },
        {
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
          name: 'gridcatv_250',
          title: 'Número de viviendas con piscina',
          style: 'stl_viviendas_nviv_h2o',
          url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcatv/wms?',
        },
        {
          name: 'gridcatv_250',
          title: 'Número de viviendas con piscina de uso unifamiliar',
          style: 'stl_viviendas_nvivh2ouni',
          url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcatv/wms?',
        },
        {
          name: 'gridcatv_250',
          title: 'Número de viviendas con piscina de uso comunitario',
          style: 'stl_viviendas_nvivh2com',
          url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcatv/wms?',
        }
      ]
    },
    {
      group: 'Viviendas con espacios abiertos',
      layers: [
        {
          name: 'gridcatv_250',
          title: 'Número de viviendas en parcelas con espacios abiertos (patio/jardín)',
          style: 'stl_viviendas_nviv_ea',
          url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcatv/wms?',
        },
        {
          name: 'gridcatv_250',
          title: 'Número de viviendas unifamiliares en parcelas con espacio abierto (patio/jardí­n)',
          style: 'stl_viviendas_nvivuni_ea',
          url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcatv/wms?',
        },
        {
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
          name: 'gridcatv_250',
          title: 'Número de viviendas en parcelas con garaje',
          style: 'stl_viviendas_nviv_app',
          url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcatv/wms?',
        },
        {
          name: 'gridcatv_250',
          title: 'Número de viviendas unifamiliares en parcelas con garaje',
          style: 'stl_viviendas_nvivuniapp',
          url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcatv/wms?',
        },
        {
          name: 'gridcatv_250',
          title: 'Número de viviendas plurifamiliares en parcelas con garaje',
          style: 'stl_viviendas_nvivpluapp',
          url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridcatv/wms?',
        }
      ]
    }
  ]
}

const mp = new Inputselectaddlayer(configSelectAddLayer);



map.addPlugin(mp);
