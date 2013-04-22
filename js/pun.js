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
        article = Y.one("article"),
        this_url = window.location.href;

    /**
     * Split a URL into an object with a protocol,
     * hostname, port, path, parsed query parameters and hash. Missing
     * paramester valus will be set to empty string.
     * @method parseUrl
     * @param  {String} A string URL (E.g. "http://example.com/mything.html")
     * @return {object} with attributes of prototocol, hostname, port, path, query params and hash
     */
    function parseUrl(href) {
        throw "parseUrl() Not implemented.");
    }

    /**
     * For an object create with parseUrl() assemble a valid URL from it.
     * @method formatUrl
     * @param {Object} in the form generated by parseUrl().
     * @return {String}
     */
    function formatUrl(Url) {
        throw "parseUrl() Not implemented.");
    }

    /**
     * Given a full filename and path string, return just the base
     * path (e.g. /myfolder/myfile.html should yeild /myfolder
     * @method basepath
     * @param {String} full  filename path
     * @return {String} just the folder path to the full filename path
     */
    function basepath(fullFilename) {
        throw "basepath() Not implemented.";
    }

    /**
     * Given a file path like that path part of an URL return the filename
     * with extension.
     * @method basename
     * @param {String} full filename path
     */
    function basename(fullFilename) {
        throw "basename() Not implemented";
    }

    /**
     * Given a path or basename return the extension found.
     * @method extname (filename)
     * @param {String} filename
     * @return {String} the extention of the filename.
     */
    function extname (filename) {
        throw "extname() Not implemented";
    }



    /**
     * Get a pagename from a URL parsed with parseUrl.
     * If not reference found return the default page name (e.g. toc.md).
     * @method getPageName
     * @param {Object} in the form generated by parseUrl().
     * @param {String} the name of a default page (e.g. README.md)
     * @return {String} of the basename (e.g. http://example.com/README.md would yield README.md)
     */
    function getPageName(Url, defaultPageName) {
        throw "getPageName() Not implemented.";
        return defaultPageName;
    }

    //
    // What page are we viewing?
    //
    
    //
    // Get content and load page
    //

    //article.setHTML(loading_template({title: page_title}));
 });