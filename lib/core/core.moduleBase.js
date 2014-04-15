/*!
 * core.moduleBase
 */

(function( core ) { 'use strict';

  /**
   * locals
   */

  var $ = core.$;


  /**
   * expose `ModuleBase`
   */

  core.modules.moduleBase = ModuleBase;


  /**
   * `ModuleBase` constructor
   *
   * @param {dom} element
   * @param {object} options
   */

  function ModuleBase( element, options ) {
    this.options = options;
    this.element = element;

    core.log( 'ModuleBase constructor' );
  }


  /**
   * `create` observables and model method 
   */

  ModuleBase.prototype.create = function() {};
  

  /**
   * `render` executed right after apply bindings happens
   */

  ModuleBase.prototype.render = function() {};


  /**
   * `show` module
   */

  ModuleBase.prototype.show = function() {};


  /**
   *  `hide` module
   */

  ModuleBase.prototype.hide = function() {};


  /**
   * `destroy` for clearing the module
   */

  ModuleBase.prototype.destroy = function() {};

})( this.tiko.core );