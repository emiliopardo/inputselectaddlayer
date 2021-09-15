/* eslint-disable no-console */
/**
 * @module M/plugin/Inputselectaddlayer
 */
import 'assets/css/inputselectaddlayer';
import InputselectaddlayerControl from './inputselectaddlayercontrol';
import api from '../../api.json';

export default class Inputselectaddlayer extends M.Plugin {
  /**
   * @classdesc
   * Main facade plugin object. This class creates a plugin
   * object which has an implementation Object
   *
   * @constructor
   * @extends {M.Plugin}
   * @param {Object} impl implementation object
   * @api stable
   */
  constructor(config) {
    super();
    /**
     * Facade of the map
     * @private
     * @type {M.Map}
     */
    this.map_ = null;
    this.config = config;

    /**
     * Array of controls
     * @private
     * @type {Array<M.Control>}
     */
    this.controls_ = [];

    /**
     * Metadata from api.json
     * @private
     * @type {Object}
     */
    this.metadata_ = api.metadata;
  }

  /**
   * This function adds this plugin into the map
   *
   * @public
   * @function
   * @param {M.Map} map the map to add the plugin
   * @api stable
   */
  addTo(map) {
    //let this_ = this;
    this.control_ = new InputselectaddlayerControl(this.config)
    this.controls_.push(this.control_);
    this.map_ = map;
    // panel para agregar control - no obligatorio
    this.panel_ = new M.ui.Panel('panelInputselectaddlayer', {
      className: 'm-selector-panel',
      //collapsible: true,
      position: M.ui.position.TR,
      collapsedButtonClass: 'g-cartografia-capas2',
      tooltip: 'Aañadir capa'
    });
    this.panel_.addControls(this.controls_);
    // this.panel_.on(M.evt.ADDED_TO_MAP, function (html) {
    //   this_.panel_.open();
    // });
    map.addPanels(this.panel_);

    this.control_.on(M.evt.ADDED_WMS, ()=> {
      this.fire(M.evt.ADDED_WMS);
    })
  }
  /**
   * This function gets metadata plugin
   *
   * @public
   * @function
   * @api stable
   */
  getMetadata() {
    return this.metadata_;
  }

  getLayer(){
    return this.control_.layer
  }
}
