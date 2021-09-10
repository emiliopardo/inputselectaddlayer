/* eslint-disable no-console */
/**
 * @module M/control/InputselectaddlayerControl
 */

import InputselectaddlayerImplControl from 'impl/inputselectaddlayercontrol';
import templateSelectOptionGroups from 'templates/inputselectaddlayerOptionGroups';
import templateSelectAnidated from 'templates/inputselectaddlayerAnidatedSelect'
import templateSelect from 'templates/inputselectaddlayer';

export default class InputselectaddlayerControl extends M.Control {
  /**
   * @classdesc
   * Main constructor of the class. Creates a PluginControl
   * control
   *
   * @constructor
   * @extends {M.Control}
   * @api stable
   */
  constructor(config) {
    // 1. checks if the implementation can create PluginControl
    if (M.utils.isUndefined(InputselectaddlayerImplControl)) {
      M.exception('La implementación usada no puede crear controles InputselectaddlayerControl');
    }
    // 2. implementation of this control
    const impl = new InputselectaddlayerImplControl();
    super(impl, 'Inputselectaddlayer');
    this.layer = null;
    this.config = config;
    this.checkConfig(this.config);
    this.title = config.title;
  }

  /**
   * This function creates the view
   *
   * @public
   * @function
   * @param {M.Map} map to add the control
   * @api stable
   */
  createView(map) {

    return new Promise((success, fail) => {
      //let html
      const html = M.template.compileSync(this.template, this.templateVars);
      // Añadir código dependiente del DOM
      this.element = html;
      this.addEvents(html);
      success(html);
    });
  }

  addEvents(html) {
    // QuerySelector
    this.layerSelector = html.querySelector('select#layerSelector');
    if (Array.isArray(this.data)) {
      this.groupSelector = html.querySelector('select#groupSelector');
      this.layerSelector.disabled = true;
      this.groupSelector.addEventListener('change', () => {
        let value = this.groupSelector[this.groupSelector.selectedIndex].value;
        this.layerList = this.getGroupLayersByName(value);
        if (this.groupSelector[0].value == '') {
          this.groupSelector.remove(0);
        }
        if (this.config.group) {
          this.layerGroups = this.getLayersFromGroup(value);
          this.fillLayerSelectorOptionGroups(this.layerGroups);
        } else {
          this.fillLayerSelector(this.layerList);
        }
        this.layerSelector.disabled = false;
      });
    }
    //EventListeners
    this.layerSelector.addEventListener('change', () => {
      let value = this.layerSelector[this.layerSelector.selectedIndex].value;
      this.LoadLayer(value);
      if (this.layerSelector[0].value == '') {
        this.layerSelector.remove(0);
      }
    });
  }

  /**
   * This function gets activation button
   *
   * @public
   * @function
   * @param {HTML} html of control
   * @api stable
   */
  getActivationButton(html) {
    return html.querySelector('.m-inputselectaddlayer button');
  }

  /**
   * This function compares controls
   *
   * @public
   * @function
   * @param {M.Control} control to compare
   * @api stable
   */
  equals(control) {
    return control instanceof InputselectaddlayerControl;
  }

  // Add your own functions 
  checkConfig(config) {
    this.layerList = new Array();
    this.groupList = new Array();
    this.data = config.data;
    this.isGroup = config.group;
    if (Array.isArray(this.data) & config.group == true) {
      console.log('es anidado con optionGroup')
      for (let index = 0; index < config.data.length; index++) {
        this.groupList.push(config.data[index].name)
      }
      this.templateVars = { vars: { title: this.title, groups: this.groupList } };
      this.template = templateSelectAnidated;
    } else if (Array.isArray(this.data) & config.group == false) {
      console.log('es anidado sin optionGroup')
      for (let index = 0; index < config.data.length; index++) {
        this.groupList.push(config.data[index].name)
      }
      this.templateVars = { vars: { title: this.title, groups: this.groupList } };
      this.template = templateSelectAnidated;
    } else if (config.group) {
      console.log('no anidado con optionGroup')
      this.getLayersFromGroupsLayers(this.data.layerGroups);
      this.templateVars = { vars: { title: this.title, groups: this.data.layerGroups } };
      this.template = templateSelectOptionGroups;
    } else {
      console.log('no anidado sin optionGroup')
      this.layerList = this.data.layers;
      this.templateVars = { vars: { title: this.title, layers: this.data.layers } };
      this.template = templateSelect;
    }

  }

  getGroupLayersByName(value) {
    let find = false;
    let layers = new Array();
    do {
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].name == value) {
          layers = this.data[i].layers
          find = true;
        }
      }
    } while (!find);
    return layers
  }

  getLayersFromGroup(value) {
    let find = false;
    let layersGroups = new Array();
    do {
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].name == value) {
          layersGroups = this.data[i].layerGroups
          find = true;
        }
      }
    } while (!find);
    return layersGroups
  }

  getLayersFromGroupsLayers(layerGroups) {
    let arrayLayers = null
    let layer = null;
    for (let x = 0; x < layerGroups.length; x++) {
      arrayLayers = layerGroups[x].layers;
      for (let y = 0; y < arrayLayers.length; y++) {
        layer = arrayLayers[y];
        this.layerList.push(layer);
      }
    }
  }

  fillLayerSelector(values) {
    this.layerList = values;
    this.layerSelector.innerHTML = '';
    let element = document.createElement('option');
    element.value = '';
    element.textContent = ' --- Selecciona una capa --- ';
    this.layerSelector.appendChild(element);
    for (let index = 0; index < values.length; index++) {
      let layer = values[index];
      element = document.createElement('option');
      element.value = layer.id;
      element.textContent = layer.title
      this.layerSelector.appendChild(element);
    }
  }

  fillLayerSelectorOptionGroups(values) {
    this.layerSelector.innerHTML = '';
    let element = document.createElement('option');
    element.value = '';
    element.textContent = ' --- Selecciona una capa --- ';
    this.layerSelector.appendChild(element);
    for (let index = 0; index < values.length; index++) {
      let group = values[index].group;
      let optgroup = document.createElement('optgroup');
      optgroup.label = group;
      for (let y = 0; y < values.length; y++) {
        const layers = values[y].layers;
        this.layerList = layers;
        for (let z = 0; z < layers.length; z++) {
          let layer = layers[z];
          let option = document.createElement('option');
          option.value = layer.id;
          option.textContent = layer.title;
          optgroup.appendChild(option);
        }
      }
      this.layerSelector.appendChild(optgroup);
    }
  }


  LoadLayer(value) {
    this.map_.removeLayers(this.layer);
    let selectedLayer = null;
    let find = false;
    do {
      for (let i = 0; i < this.layerList.length; i++) {
        if (this.layerList[i].id == value) {
          this.layer = new M.layer.WMS({
            url: this.layerList[i].url,
            name: this.layerList[i].name,
            legend: this.layerList[i].title,
            transparent: true
          }, {
            params: {
              styles: this.layerList[i].style,
              layers: this.layerList[i].name
            }
          });

          selectedLayer = this.layerList[i]
          find = true;
        }
      }
    } while (!find);

    this.layer.setLegendURL(selectedLayer.url + 'service=WMS&version=1.1.1&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=' + selectedLayer.name + '&style=' + selectedLayer.style);
    this.layer.setOpacity(0.9);
    this.map_.addLayers([this.layer]);
    this.layer.displayInLayerSwitcher = true;
  }

}
