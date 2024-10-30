var WAJ = WAJ || {};

var WAJ_Core = {

    get_page: function(page, scroll) {

        if (!page) {
            page = 1;
        }
        if (scroll == undefined)
        {
            scroll = true;
        }
        //console.log(category);
        jQuery(".woo_ajax_products ul.products").addClass("preloader");
        //return;
        var query_params = WAJ.params;
        query_params.action = "woo_ajax_nav";
        query_params.rand = WAJ_Core.randomString(10);
        query_params.paged = page;

        jQuery.get(WAJ.ajax_url, query_params, 'html')
              .done(function (data) {
                  data = WAJ_Core.parse_json(data);
                  //$jQueryparent = jQuery('div.woocommerce.woo_ajax_products').parent('div');
                  //jQuery('div.woocommerce.headway_woo').remove();
                  jQuery(".woo_ajax_nav").replaceWith(data.html);
                  jQuery(".woo_ajax_nav .products .type-product").addClass("product");


                  if (jQuery('.woo_ajax_products div#waj_pagination').length && scroll) {
                      WAJ_Core.scrollToBottom(jQuery('.woo_ajax_products div#waj_pagination'));
                  }
                  //MagicThumb.refresh();
                  WAJ_Core.dropdowns_change_init();
              });

        return false;
    },

    // Add hanlers to Order dropbown
    dropdowns_change_init: function() {
        // Check if order from exists
        //if ( document.querySelector('form.woocommerce-ordering') != null ) {
        jQuery("#woo_categories .orderby").on("change", function () {
            WAJ.params.orderby = jQuery(this).val();
            WAJ_Core.get_page(1, false);
            return false;
        });
        jQuery("#woo_categories .dropdown_product_cat").on("change", function () {
            WAJ.params.product_cat = jQuery(this).val();
            WAJ_Core.get_page(1, false);
            return false;
        });

    },

    parse_json: function (data) {
        try {
            // Get the valid JSON only from the returned string
            if (data.indexOf('<!--WAJ_START-->') >= 0)
                data = data.split('<!--WAJ_START-->')[1]; // Strip off before after WC_START

            if (data.indexOf('<!--WAJ_END-->') >= 0)
                data = data.split('<!--WAJ_END-->')[0]; // Strip off anything after WC_END
            // Parse
            result = jQuery.parseJSON(data);

            //console.log( result.result === 'success' );
            if (result) {
                return result;
            } else {
                throw 'Invalid response';
            }
        }
        catch (err) {
            alert('Error: ' + err);
        }
    },


    randomString: function (length) {
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
        if (!length)
            length = Math.floor(Math.random() * chars.length);
        var str = '';
        for (var i = 0; i < length; i++) {
            str += chars[Math.floor(Math.random() * chars.length)];
        }
        return str;
    },

    scrollToBottom: function (el) {
        div_height = jQuery(el).height();
        div_offset = jQuery(el).offset().top;
        window_height = jQuery(window).height();
        jQuery('html,body').scrollTop(div_offset - window_height + div_height + 60);
    }
};



jQuery(document).ready(function () {

    jQuery(document).on("click", ".waji-paged", function () {
        var go_to_page = jQuery(this).data("paged");
        WAJ_Core.get_page( go_to_page, true );
    });

    WAJ_Core.dropdowns_change_init();

});

