/**
 * TemplateEnumaration
 *
 * Represents the enum of all available templates
  */
(function(){

    var EnumFactory = require("./EnumFactory");

    //TODO: Is it possible to workaround this extra variable withing browserify?!
    exports.enum = EnumFactory.initEnum(
        "templates",
        {
            /** tpl holds a reference to the actual handlebars template function **/
            MAIN: {tpl:  require("../../../templates/main.hbs")},
            INTRO: {tpl:  require("../../../templates/intro.hbs")},
            AUTH_ANIMATION: {tpl:  require("../../../templates/authenticationAnimation.hbs")},
            BROWSER_NOT_SUPPORTED: {tpl:  require("../../../templates/browserNotSupported.hbs")}
        });
}());
