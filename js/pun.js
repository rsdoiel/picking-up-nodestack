/**
 * pun.js - This is the JavaScript library to support the reading experience of
 * Picking Up Nodestack.
 *
 * @author R. S. Doiel, <rsdoiel@gmail.com>
 * copyright (c) 2013 all rights reserved
 * Licensed under the BSD 2-clause License http://opensource.org/licenses/BSD-2-Clause
 */

 /*jslint browser: true, indent: 4 */
 /*global YUI */
 YUI({
     debug: true
 }).use("node", "io", "gallery-markdown", "handlebars", function (Y) {
    "use strict";
    var source_navigation_template = Y.one("navigation-template").getHTML(), 
        navigation_template = Y.Handlebars.compile("navigation-template"),
        source_loading_template = Y.one("loading-template").getHTML(),
        loading_template = Y.Handlebars.compile(source_loading_template),
        source_article_template = Y.one("article-template").getHTML(),
        article_template = Y.Handlebars.compile(source_article_template),
        navigation = Y.one("navigation"),
        article = Y.one("article");

    //
    // What page are we viewing?
    //
    
    //
    // Get content and load page
    //

    //article.setHTML(loading_template({title: page_title}));
 });
