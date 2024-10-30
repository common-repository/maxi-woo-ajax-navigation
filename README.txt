=== Maxi Woo Ajax Navigation ===
Contributors: kaminsky.m
Donate link: http://wp-vote.net/paypal-payment/?type=little_thank
Tags: Woocommerce, ajax navigation, ajax pagination, products, filter
Requires at least: 3.5
Tested up to: 4.8
Stable tag: 1.0.2
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

This plugin allows easy insert Woocommerce products list with Ajax navigation, category and order filter via shortcode.

== Description ==

Easy and fast way show Woocommerce products list with Ajax navigation, category and order filter via shortcode in any page / post.

Useful if you want display some of your products inside article.

*Compatible with Woocommerce 3.0.x!*

User can filter products by category ang change they order (all this do also Ajax).

In shortcode setting possible filter products by category ID or products IDs and SKUs list (Example: 2,5,8,24).

See [demo on resume/cv template shop](https://lebenslaufdesigns.de/ "pluign demo").

For insert products list use following shortcode:
`[woo_ajax_nav columns="3" orderby="title" order="asc" per_page="3" product_cat="" ids="" skus=""]`

**Params:**

* `columns`: columns number (1,2,3,4)

* `orderby` and `order`: https://codex.wordpress.org/Class_Reference/WP_Query#Order_.26_Orderby_Parameters

* `per_page`: how many product shows in one page

* `product_cat`: from what category select products

* `ids`: products ids (Example: 2,5,8,24), if need shows just specific products


**Note:** Woocommerce products block design depends on used Wordpress theme and Woocommerce styles.

== Installation ==

1. Unzip plugin archive and upload to the `/wp-content/plugins/` directory or install from Wordpress.org
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Set up plugin settings in Settings => `Woo Ajax Nav` page
4. Place [woo_ajax_nav columns="3" orderby="title" per_page="3" product_cat="" ids="" skus=""] in your page / post content

== Frequently Asked Questions ==

= How i can change products block design / layout =

It depends on you theme and Woocommerce styles, this plugin do not change products design, just shows products with default styling.


== Screenshots ==

1. Plugin settings
2. Example

== Changelog ==

= 1.0.2 =

* Fixes for Woocommerce 3.0.x
* Rewritten public JS
* Small improvements
* Spelling corrections

= 1.0.1 =

* Released

== Upgrade Notice ==

None