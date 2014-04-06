/*!
 * core.base
 */

(function( tiko, $, ko, underscore ) { 'use strict';

  tiko.core = tiko.core || {};

  // encapsulating base libraries
  // for easier access
  tiko.core.$ = $;
  tiko.core.ko = ko;
  tiko.core._ = underscore;

  for( var i = 0, args = Array.prototype.slice.call( arguments, 1 ), len = args.length, isDepMissing = false; i < len; i++ ) {
  	if( args[ i ] == null ) { isDepMissing = true };
  }
  
  isDepMissing && ( throw new Error( 'jQuery, { underscore or loDash } and knockout are all required for tiko to operate' ) );

})( this.tiko = this.tiko || {}, jQuery, ko, _ );