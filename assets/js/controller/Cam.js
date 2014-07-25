(function () {
    var Seriously = require("../libs/seriously/seriously"),
        $ = require("jquery"),
        TemplateController = require("./Template"),
        TemplateEnum = require("../enums/Template"),
        EffectsView = require("../view/Effects"),
        EffectsController = require("./Effects"),
        SnapshotView = require("../view/Snapshot"),
        seriously = new Seriously(),
        mainTarget = null;


    var init = function () {
        require("../libs/seriously/plugins/seriously.camera");
        //TODO: Can this be done within the loop?
        require("../libs/seriously/effects/seriously.ascii",
            "../libs/seriously/effects/seriously.emboss", "../libs/seriously/effects/seriously.hex",
            "../libs/seriously/effects/seriously.invert", "../libs/seriously/effects/seriously.kaleidoscope",
            "../libs/seriously/effects/seriously.nightvision", "../libs/seriously/effects/seriously.polar",
            "../libs/seriously/effects/seriously.mirror");

        var mainTpl = $(TemplateController.getTemplate(TemplateEnum.enum.MAIN)),
            cameraSource = seriously.source('camera');

        mainTarget = seriously.target(mainTpl.find("#mainCanvas")[0]);

        /** on start, set the target source to the webcamsource without any effects**/
        mainTarget.source = cameraSource;

        /**
         * construct the effect canvas and their filters
         */
        $.each(EffectsController.getEffects(), function (_idx, _config) {
            var effectName = _config.effectName,
                effectCanvas = _config.canvas,
                target = seriously.target(effectCanvas[0], {
                    allowSecondaryWebGL: true
                });
            switch (effectName) {
            /** An effect canvas without effect so that the user can go back to normal **/
                case 'none':
                    _config.effectObj = cameraSource;
                    target.source = cameraSource;
                    break;
                default:
                    var effect = seriously.effect(effectName);
                    effect.source = cameraSource;
                    _config.effectObj = effect;
                    target.source = effect;
                    break;
            }
        });

        /**
         * if the webcam-source is loaded, show the main view
         */
        cameraSource.on("ready", function () {
            $("#content").fadeOut("slow", function () {
                mainTpl.appendTo($(this).empty());
                SnapshotView.init();
                EffectsView.init();
                seriously.go();
                $(this).fadeIn("slow");

            });
        });

    };

    /**
     * Apply the effect to the main canvas
     * @param _effectObj
     */
    var setEffect = function (_effectObj) {
        mainTarget.source = _effectObj;
    };

    /**
     * check whether the browser is able to use the webcam
     * @returns {boolean}
     */
    var isSupported = function () {
        var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        return getUserMedia !== undefined;
    };

    exports.init = init;
    exports.setEffect = setEffect;
    exports.isSupported = isSupported;
}());