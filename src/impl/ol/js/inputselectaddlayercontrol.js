/**
 * @module M/impl/control/InputselectaddlayerControl
 */
export default class InputselectaddlayerControl extends M.impl.Control {
  /**
   * This function adds the control to the specified map
   *
   * @public
   * @function
   * @param {M.Map} map to add the plugin
   * @param {HTMLElement} html of the plugin
   * @api stable
   */
  addTo(map, html) {
    //const olMap = map.getMapImpl();

    // super addTo - don't delete
    super.addTo(map, html);
  }

  // Add your own functions
}
