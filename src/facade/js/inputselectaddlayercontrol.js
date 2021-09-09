/* eslint-disable no-console */
/**
 * @module M/control/InputselectaddlayerControl
 */

import InputselectaddlayerImplControl from 'impl/inputselectaddlayercontrol';
import templateSelectOptionGroups from 'templates/inputselectaddlayerOptionGroups';
import templateSelectAnidated from 'templates/inputselectaddlayerAnidatedSelect'
import templateSelect from 'templates/inputselectaddlayer';
import templateSelectAnidatedAndOptionGroups from 'templates/inputselectaddlayerAnidatedSelectAndOptionGroup';


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
    this.title = config.title;
    this.isGroup = config.group
    this.groupTypes = new Array();
    if (this.isGroup) {
      this.groupTypes = config.groupTypes;
      this.getGroupTypes(this.groupTypes);
    } else {
      this.layersList = this.config.layers
      this.templateVars = { vars: { title: this.title, layersList: this.layersList } };
      this.template = templateSelect;
    }
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
    if (this.groupTypes.includes('group')) {  
      this.groupSelector = html.querySelector('select#groupSelector');
      this.layerSelector.disabled = true;
      this.groupSelector.addEventListener('change', () => {
        let value = this.groupSelector[this.groupSelector.selectedIndex].value;
        let layers = this.getOptionsSelect(value);
        if (this.groupSelector[0].value == '') {
          this.groupSelector.remove(0);
        }
        this.fillLayerSelector(layers);
        this.layerSelector.disabled = false;
      });
    }
    if (this.groupTypes.includes('optiongroup') & this.groupTypes.includes('group') ){
      this.groupSelector = html.querySelector('select#groupSelector');
      this.layerSelector.disabled = true;
      this.groupSelector.addEventListener('change', () => {
        let value = this.groupSelector[this.groupSelector.selectedIndex].value;
        let layers = this.getOptionsSelect(value);
        if (this.groupSelector[0].value == '') {
          this.groupSelector.remove(0);
        }
        this.fillLayerSelector(layers);
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

  getGroupTypes(values) {
    this.layerGroups = this.config.layerGroups


    if (values.includes('group') & values.includes('optiongroup')) {
      console.log('es de tipo anidado y con optionGroup')
      this.groups = this.getGroups(this.layerGroups);
      this.layerGroups = this.config.layerGroups;
      this.layersList = this.getLayers(this.layerGroups);
      this.template = templateSelectAnidatedAndOptionGroups;
      this.templateVars = { vars: { title: this.title, select1: this.groups } };
    } else if (values.includes('group')) {
      console.log('es de tipo solo anidado')
      this.groups = this.getGroups(this.layerGroups);
      this.layersList = this.getLayers(this.layerGroups);
      this.template = templateSelectAnidated;
      this.templateVars = { vars: { title: this.title, select1: this.groups } };
    } else if (values.includes('optiongroup')) {
      console.log('es de tipo solo optionGroup')
      this.groups = this.getOptionGroups(this.layerGroups);
      this.layersList = this.getLayers(this.layerGroups);
      this.templateVars = { vars: { title: this.title, groups: this.groups } };
      this.template = templateSelectOptionGroups
    }
  }

  getGroups(layerGroups) {
    let groups = new Array();
    for (let x = 0; x < layerGroups.length; x++) {
      groups.push(layerGroups[x].group);
    }
    return groups;
  }

  getOptionGroups(layerGroups) {
    let layer;
    let groups = new Array();
    for (let x = 0; x < layerGroups.length; x++) {
      let layers = layerGroups[x];
      layer = {
        group: layers.optiongroup,
        layers: layers.layers
      }
      groups.push(layer);
    }
    return groups;
  }

  getOptionsSelect(value) {
    let layerGroups = this.config.layerGroups
    let layerList = new Array();
    let find = false;
    do {
      for (let i = 0; i < layerGroups.length; i++) {
        if (this.layerGroups[i].group == value) {
          layerList = this.layerGroups[i].layers;
          find = true;
        }
      }
    } while (!find);
    return layerList
  }

  fillLayerSelector(values) {
    this.layersList = values;
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

  getLayers(layerGroups) {
    let layerList = new Array();
    for (let x = 0; x < layerGroups.length; x++) {
      let layers = layerGroups[x].layers;
      for (let index = 0; index < layers.length; index++) {
        const element = layers[index];
        layerList.push(element);
      }
    }
    return layerList;
  }

  LoadLayer(value) {
    this.map_.removeLayers(this.layer);
    let selectedLayer = null;
    let find = false;
    do {
      for (let i = 0; i < this.layersList.length; i++) {
        if (this.layersList[i].id == value) {
          this.layer = new M.layer.WMS({
            url: this.layersList[i].url,
            name: this.layersList[i].name,
            legend: this.layersList[i].title,
            transparent: true
          }, {
            params: {
              styles: this.layersList[i].style,
              layers: this.layersList[i].name
            }
          });

          selectedLayer = this.layersList[i]
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
