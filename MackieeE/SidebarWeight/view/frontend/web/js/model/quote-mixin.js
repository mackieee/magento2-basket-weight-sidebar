/*
 * Add new method via mixin:
 * getCalcuatedWeight: float
 * 
 * @date 09th Nov 2017
 * @author Rob M.
 * @returns object
 */
define([], function() {
	'use strict';
	
	 /*
	  * @var object quote
	  * 
	  * (quote is the callback of quote.js)
	  */
	 return function (quote)
	 {
		 /*
		  * Fetches the combined weight from 
		  * the shared CheckoutConfig Data.
		  *
		  * @param none
		  * @return float
		  */
	     quote.getCalculatedWeight = function(){
	    	 
	     	var total = 0.; 
	     	_.each(this.getItems(), function( item ){
	     		total += parseFloat( item.weight );
	     	});
	     	
	     	return total.toFixed( 2 );
	     }
	     
	     /*
		  * Add kg as we fetch weight as a float.
		  *
		  * @param none
	      * @return string
	      */
	     quote.getWeightText = function()
	     {
	    	 return this.getCalculatedWeight().toString() + "kg";
	     }
		 
		 return quote;
	 };

});