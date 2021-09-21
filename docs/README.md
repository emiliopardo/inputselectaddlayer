# InputSelectAddLayer

[![Build Tool](https://img.shields.io/badge/build-Webpack-green.svg)](https://github.com/sigcorporativo-ja/Mapea4-dev-webpack)

## Descripción

 Plugin de [Mapea](https://github.com/sigcorporativo-ja/Mapea4) para la carga de layers de Mapea tanto Raster como Vectoriales mediante un elemento  html input select

 En función de la configuración suministrada el plugin puede generar cuatro tipo de select:
 
 - ***Select simple:*** Se genera un único input select en el que se listan todos los layers pasados en la configuración
 - ***Select simple con grupos:*** Se genera un único select en el que se lista los layers pasados en la configuración agrupados mediante ***optgroup***.
 - ***Select anidado:*** Se generan dos select de tipo anidado. En función de la opción seleccionada en el primer select se muestran diferentes opciones en el segundo select. 
 - ***Select anidado con grupos:*** Se generan dos select de tipo anidado. En función de la opción seleccionada en el primer select se muestran diferentes opciones en el segundo select agrupados mediante ***optgroup***.

![Imagen](./images/inputselectaddlayerPlugin.png)

Previamente a la definición de los parámetros de configuración del plugin los layers a cargar deben de haberse definido.

En la [Wiki de Mapea](https://github.com/sigcorporativo-ja/Mapea4/wiki/Capas) viene detallada cada una de las definiciones de los diferentes tipos de Layers

Para el correcto funcionamiento del plugin es necesario pasarle en su constructor un objeto **json** con los parámetros esperados.
### Parámetros del plugin

La generación de select simple, ,select simple con grupos, select anidado o select anidado con grupos depende de los parámetros de configuración proporcionados.

A continuación se proporcionan un ejemplo para cada una de las configuraciones tomando como base las Ortofotografías de Andalucía.
- ### Ejemplo select simple ###

```javascript
const configOrtofotografias4 = {
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
```

- ### Ejemplo select simple con grupos ###

```javascript
const configOrtofotografias3 = {
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
```

- ### Ejemplo select anidado sin grupos ###
```javascript
const configOrtofotografias2 = {
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

```

- ### Ejemplo select anidado con grupos ###
```javascript
const configOrtofotografias1 = {
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
```

- **title [string]:** ***<span style="color:red">Optativo</span>*** En caso de porporcionarse el título se mostrara arriba de los elementos select.
- **label [string]:** Texto descripivo 
- **group [boolean]:**  Solo admite valores _True_ o _False_ en caso de ser _True_ el select generado agrupara las capas en grupos mediante la etiqueta html ___optgroup___. 
- **data [object]** o **[array]:** Este parámetro de configuración admite tanto un objeto json como un array de objetos json. 
En el caso de que se pase un único objeto se generará una único select. Sin embargo si se pasa un array de objetos se generaran dos select. Estando el segundo select anidado con el primero.
<br>

  **Descripción del objeto data:**
  
  - **name [string]:** Nombre descriptivo.
  - **layers [array]:** Array de layers de Mapea.

   - **layerGroups [array]:** ***<span style="color:red">Optativo</span>*** En caso de haberse definido la propiedad ***group*** como ***true*** contendra los siguientes elementos
      - **group [string]:** Nombre del grupo. se usa como value y texto de las opciones del primer select.
      - **layers [array]**: Array de layers de Mapea.
      

## Metodos

El plugin cuenta con el método ***getLayer()*** el cual permite obtener el layer que actualmente esta cargado en el mapa mediante este plugin. De esta manera no es necesario hacer uso del metodo ***getLayers()*** del objeto Map

## Eventos 

El plugin expone dos eventos 

- ***M.evt.ADDED_TO_MAP:*** Se dispara cuando se carga el control del plugin 
- ***M.evt.LOAD:*** Se dispara cuando se carga una capa mediante el plugin

Al exponer el evento ***M.evt.ADDED_WMS*** cada vez que se carga un layer con el plugin es posible saber en cada momento que capa esta actualemente cargada combinando dicho evento con el metodo getLayer() del plugin.

```javascript
const mp = new Inputselectaddlayer(configGridPoblacion);

map.addPlugin(mp);

mp.on(M.evt.ADDED_TO_MAP, () => {
  console.log('se cargo el plugin');
})

mp.on(M.evt.LOAD, () => {
  console.log('se cargo una capa');
  console.log(mp.getLayer().name)
})
```

## Recursos y configuración

- js: inputselectaddlayer.ol.min.js
- css: inputselectaddlayer.min.css

```javascript

//DEFINICION DE LAYERS

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


// DEFINICION CONFIGPLUGIN
/* Select Anidado y sin Option Group**/
const configOrtofotografias2 = {
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


const mp = new Inputselectaddlayer(configOrtofotografias2);

map.addPlugin(mp);

mp.on(M.evt.ADDED_TO_MAP, () => {
  console.log('se cargo el plugin');
})

mp.on(M.evt.LOAD, () => {
  console.log('se cargo una capa');
  console.log(mp.getLayer().name)
})
```

## Video Demo

Para comprobar el funcionamiento de este plugin se puede descargar el [Video](https://github.com/emiliopardo/inputselectaddlayer/blob/master/docs/video/inputselectaddlayer.webm?raw=true) el cual contempla la configuración y carga del plugin con diferentes geosearch