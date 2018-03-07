/**
 * Mixin/Extend Magento_Checkout Quote & Cart Items
 */
var config = {
    config: {
        mixins: {
        	/*
        	 * Extend the Quote/Cart System to Calcuate the Basket 
        	 * Weight. 
        	 */
            'Magento_Checkout/js/model/quote': {
            	'MackieeE_SidebarWeight/js/model/quote-mixin': true
            },
            /*
             * Extend the Cart-items node to provide a text() (KnockoutJs)
             * For the in-UI BasketWeight() call. 
             */
            'Magento_Checkout/js/view/summary/cart-items': {
            	'MackieeE_SidebarWeight/js/view/summary/cart-items-mixin': true
            }
        }
    }
};