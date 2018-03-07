/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'Magento_Checkout/js/model/quote'
], 
function (quote) 
{
    'use strict';
    
    /*
     * @return object cartItems
     */
    return function( cartItems )
    {
    	/*
    	 * Set the template to the Modules' Own.
    	 */
    	cartItems.defaults.template = 'MackieeE_SidebarWeight/summary/cart-items';

    	/*
    	 * Extend the original cartItems object 
    	 * (Held within Magento_Checkout Namespace)
    	 */
	    return cartItems.extend({
	    	
	        /*
	         * Collect the calcuated Basket Weight in the
	         * Quote system (Aka. Cart)
	         * 
	         * @return string 
	         */
	        getBasketWeight: function() 
	        {
	        	if ( typeof quote !== "undefined" )
	        	{
	        		return quote.getWeightText();
	        	}
	        	else
	        	{
	        		return "";
	        	}
	        },
	    });
	    
	    return cartItems;
    }
});
