/**
 * This controller is responsible to play the sounds used if the user wants to take a photo
 */
(function () {

    var $ = require("jquery"),
        soundEnabled = false;

    /**
     * preload Sounds
     */
    $(function () {
        if($.ionSound){
            soundEnabled = true;
            $.ionSound({
                sounds: [
                    "camera",
                    "counter"
                ],
                path: "./assets/sounds/"
            });
        }
    });

    var playCounterSound = function () {
        if(soundEnabled) {
            $.ionSound.play("counter");
        }
    };
    var playCameraSound = function () {
        if(soundEnabled) {
            $.ionSound.play("camera");
        }
    };

    exports.playCounterSound = playCounterSound;
    exports.playCameraSound = playCameraSound;
}());