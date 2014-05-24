define([
        "dojo/_base/declare", // declare
        "dojo/_base/array", // array.map
        "dojo/date",
        "dojo/date/locale",
        "dojo/dom-attr", // domAttr.get
        "dojo/dom-class", // domClass.add domClass.contains domClass.remove domClass.toggle
        "dojo/_base/kernel", // kernel.deprecated
        "dojo/keys", // keys
        "dojo/_base/lang", // lang.hitch
        "dojo/on",
        "dijit/_Widget",
        "dijit/_CssStateMixin",
        "dijit/_TemplatedMixin"
    ],
    function (array, date, local, declare, domAttr, domClass, kernel, keys, lang, on, has, _Widget, _CssStateMixin, _TemplatedMixin, DropDownButton) {
        return declare(null, [_Widget], {
            postCreate: function (arguments, node) {
                // Create the top "toolbar" for our sitemap GUI

                // Create the sitemap itself

            },

            // Set the sitemap page
            setSitemap: function(sitemap) {

            },

            // Get the sitemap page
            getSitemap: function() {

            }
        });
    });