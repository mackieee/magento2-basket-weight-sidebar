# Basket Weight in Checkout Sidebar for Magento 2

Simple little display of the **total** Basket weight in Magento.

This may vary in display depending on your Design template. 

![Example Picture](https://user-images.githubusercontent.com/883702/37090508-925ff33a-21fc-11e8-9295-5abfdecea7d4.jpg)

### To Install

Unzip the MackieeE Vendor folder into your "app" folder.

> /app/code/MackieeE/SidebarWeight/

Then run the magento cli commands:

`php bin/magento cache:flush`
`php bin/magento setup:upgrade`

If you're not in development mode, you'll need to clear your cache. 
