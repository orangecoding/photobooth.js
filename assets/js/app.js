/*
 * Photobooth.JS
 *
 * © 2014 Christian Kellner | http://orange-coding.net
 *
 * GitHub: https://github.com/orangecoding/photoboothJS
 *
 * Released under MIT licence:
 * http://opensource.org/licenses/MIT
 */
(function () {
    var $ = require("jquery"),
        CamController = require("./controller/Cam"),
        TemplateEnum = require("./enums/Template"),
        templateController = require("./controller/Template");

    /**
     * Bootstrapping application
     */
    $(function () {

        /**
         * If the browser is not supported, render and show a special div to prevent the user from using this app until
         * he downloads a cool browser ;)
         */
        if(!CamController.isSupported()){
            $(templateController.getTemplate(TemplateEnum.enum.BROWSER_NOT_SUPPORTED)).appendTo($("#content"));
            return;
        }

        $(templateController.getTemplate(TemplateEnum.enum.INTRO)).appendTo($("#content"));

    });
}());