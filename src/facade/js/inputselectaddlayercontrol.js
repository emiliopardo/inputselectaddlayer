/* eslint-disable no-console */
/**
 * @module M/control/InputselectaddlayerControl
 */

import InputselectaddlayerImplControl from 'impl/inputselectaddlayercontrol';
import template from 'templates/inputselectaddlayer';

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

    this.config = config;
    this.isGroup = config.group
    this.layerGroups = config.layerGroups

    this.groups = this.getGroups(this.layerGroups);
    //console.log(this.getGroups(this.layerGroups));
    //console.log(this.layers);
    //console.log(this.isGroup);
    //console.log(this.config);
    //console.log(this.groups);
    

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
    let templateVars = { vars: { config: this.config ,isGroup: this.isGroup, groups: this.groups}};
    return new Promise((success, fail) => {
      //const html = M.template.compileSync(template, templateVars);
      const html = M.template.compileSync(template,templateVars);
      // Añadir código dependiente del DOM
      success(html);
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

  getGroups(layerGroups){
    let groups = new Array();
    for (let x = 0; x < layerGroups.length; x++) {
      let layers = layerGroups[x];      
      groups.push(layers.group);

    }
    console.log(groups);
    return groups;
  }
}
