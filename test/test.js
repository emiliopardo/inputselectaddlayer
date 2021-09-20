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
  url: 'http://www.ideandalucia.es/wms/ortofoto2011?',
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
  name: 'ORTO_2007',
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

/* FIN DEFINICIÓN LAYERS RASTER*/


/*INICIO CONFIGURACION PLUGIN */

/* Select Anidado con Option Group**/
const configOrtofotografias4 = {
  title: 'Ortofotografías de Andalucia',
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
/* Select Anidado y sin Option Group**/
const configOrtofotografias5 = {
  title: 'Ortofotografías de Andalucia',
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
/* Select no Anidado con Option Group**/
const configOrtofotografias6 = {
  title: 'Ortofotografías de Andalucia',
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
/* Select no Anidado sin Option Group**/
const configOrtofotografias7 = {
  title: 'Ortofotografías de Andalucia',
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
/*FIN CONFIGURACION PLUGIN */


/* Select Anidado con Option Group**/
const mp = new Inputselectaddlayer(configOrtofotografias4);
/* Select Anidado y sin Option Group**/
//const mp = new Inputselectaddlayer(configOrtofotografias5);
/* Select no Anidado con Option Group**/
//const mp = new Inputselectaddlayer(configOrtofotografias6);
/* Select no Anidado sin Option Group**/
//const mp = new Inputselectaddlayer(configOrtofotografias7);



map.addPlugin(mp);

mp.on(M.evt.ADDED_TO_MAP, () => {
  console.log('se cargo el plugin');
})


mp.on(M.evt.ADDED_WMS, () => {
  console.log('se cargo una capa');
  console.log(mp.getLayer().name)
})


