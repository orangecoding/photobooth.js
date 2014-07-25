(function () {
    var $ = require("jquery"),
        TemplateController = require("../controller/Template"),
        UiComponents = require("../components/UiComponents"),
        TemplateEnum = require("../enums/Template"),
        IntroController = require("../controller/Intro");

    $(function () {
        UiComponents.getStartButton().on("click", IntroController.onStartPhotoboothClicked);
    });

    /**
     * start the animation to indicate the user needs to do something
     */
    var startAuthenticationAnimation = function () {
        var authAnimTpl = $(TemplateController.getTemplate(TemplateEnum.enum.AUTH_ANIMATION)).addClass("hidden");
        authAnimTpl.appendTo(UiComponents.getAnimationDiv()).fadeIn("slow");

    };

    exports.startAuthenticationAnimation = startAuthenticationAnimation;
}());