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
    if (config.hasOwnProperty('title')) {
      this.title = config.title
    }
    this.layerList = new Array();
    this.groupList = new Array();
    this.data = config.data;
    this.isGroup = config.group;
    if (Array.isArray(this.data) & config.group == true) {
      // console.log('es anidado con optionGroup')
      for (let index = 0; index < config.data.length; index++) {
        this.groupList.push(config.data[index].name)
      }
      this.templateVars = { vars: { title: this.title, groups: this.groupList } };
      this.template = templateSelectAnidated;
    } else if (Array.isArray(this.data) & config.group == false) {
      // console.log('es anidado sin optionGroup')
      for (let index = 0; index < config.data.length; index++) {
        this.groupList.push(config.data[index].name)
      }
      this.templateVars = { vars: { title: this.title, groups: this.groupList } };
      this.template = templateSelectAnidated;
    } else if (config.group) {
      // console.log('no anidado con optionGroup')
      this.getLayersFromGroupsLayers(this.data.layerGroups);
      this.templateVars = { vars: { title: this.title, groups: this.data.layerGroups } };
      this.template = templateSelectOptionGroups;
    } else {
      // console.log('no anidado sin optionGroup')
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
      element.value = layer.name + '*' + layer.options.styles;
      element.textContent = layer.legend
      this.layerSelector.appendChild(element);
    }
  }

  fillLayerSelectorOptionGroups(values) {
    this.layerList = new Array();
    let find = false;
    this.layerSelector.innerHTML = '';
    let element = document.createElement('option');
    element.value = '';
    element.textContent = ' --- Selecciona una capa --- ';
    this.layerSelector.appendChild(element);
    for (let x = 0; x < values.length; x++) {

      let group = values[x].group;
      let optgroup = document.createElement('optgroup');
      optgroup.label = group;
      do {
        for (let y = 0; y < values.length; y++) {
          if (values[y].group == group) {
            let layers = values[x].layers
            for (let index = 0; index < layers.length; index++) {
              let layer = layers[index];
              this.layerList.push(layer);
              let option = document.createElement('option');
              option.value = layer.name + '*' + layer.options.styles;
              option.textContent = layer.legend;
              optgroup.appendChild(option);
            }
            find = true;
          }
        }
      } while (!find);
      this.layerSelector.appendChild(optgroup);
    }
  }


  LoadLayer(value) {
      let name = value.split('*')[0]
      let style = value.split('*')[1]
      let find = false;
      this.map_.removeLayers(this.layer);
      do {
        for (let i = 0; i < this.layerList.length; i++) {
          if (this.layerList[i].name == name && this.layerList[i].options.styles==style) {
            this.layer = this.layerList[i]
            find = true;
          }else if(this.layerList[i].name == name){
            this.layer = this.layerList[i]
            find = true;
          }
        }
      } while (!find);
      this.map_.addLayers([this.layer]);
      this.layer.setOpacity(0.9);
      this.layer.displayInLayerSwitcher = true;

      if (this.map_.getControls({ 'name': 'layerswitcher' }).length > 0) {
        this.map_.getControls({ 'name': 'layerswitcher' })[0].render();
      }

      this.layer.on(M.evt.LOAD, () => {
        this.fire(M.evt.LOAD)
      })
  }
}
