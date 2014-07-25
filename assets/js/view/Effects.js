(function () {
    var $ = require("jquery"),
        UiComponents = require("../components/UiComponents"),
        EffectController = require("../controller/Effects");

    /**
     * Initializing the View
     */
    var init = function () {
        $("#effectToggle").on("click", function (e) {
            e.preventDefault();
            showEffectCanvas();
        });
        /** append the effect cnavas (this will only be done once) **/
        $.each(EffectController.getEffects(), function (_idx, _config) {
            var $canvas = _config.canvas;
            $canvas.appendTo(UiComponents.getMainVideo());
        });
    };

    /**
     * effect canvas will be set to visible
     * the animation will move the effect canvas to the correct position
     */
    var showEffectCanvas = function () {
        $.each(EffectController.getEffects(), function (_idx, _config) {
            var $canvas = _config.canvas;
            //save the index to indicate which canvas has been clicked
            $canvas.data("index", _idx);

            $canvas.animate({
                opacity: 1,
                top: _config.effectPosition.top + "px",
                left: _config.effectPosition.left + "px"
            }, 700, "linear", function () {
                $(this).css("cursor", "pointer")
                    .off("click")
                    .on("click", function () {
                        //apply effects
                        EffectController.setEffect($(this).data("index"));
                        hideEffectCanvas($(this), this);
                    });
            });
        });
    };

    /**
     * effects will be set to invisible and moved back to the center
     */
    var hideEffectCanvas = function () {
        UiComponents.getMainVideo().css("border", "");

        $.each(EffectController.getEffects(), function (_idx, _config) {
            _config.canvas.css("position", "absolute")
                .animate({
                    opacity: 0,
                    top: "175px",
                    left: "240px"
                }, 400, "linear");
        });
    };

    exports.init = init;
    exports.showEffectCanvas = showEffectCanvas;
    exports.hideEffectCanvas = hideEffectCanvas;
}());