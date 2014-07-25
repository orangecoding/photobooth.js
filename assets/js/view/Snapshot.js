/**
 * view to create a snapshot of the canvas and store it to the local harddrive
 */
(function () {
    var $ = require("jquery"),
        UiComponents = require("../components/UiComponents"),
        SoundController = require("../controller/Sound"),
        SnapshotController = require("../controller/Snapshot");


    /**
     * Initialization
     */
    var init = function () {
        //if user clicks to generate a snapshot
        UiComponents.getSnapshotButton().on("click", function (e) {
            e.preventDefault();
            UiComponents.getSnapshotCounter().css("display", "block");
            SoundController.playCounterSound();
            //start an animation loop to indicate the user should be prepared
            (function animationCounter(_counter) {
                UiComponents.getSnapshotCounter().css("opacity", 1).css("fontSize", "40px").html(_counter).animate({
                    opacity: 0,
                    fontSize: "130px"
                }, 1200, function () {
                    if (_counter === 3) {
                        //after 3 - 2 - 1 take the photo and play a nice sound
                        SoundController.playCameraSound();
                        $(document.body).fadeOut(50, function () {
                            UiComponents.getSnapshotCounter().css("display", "none");
                            SnapshotController.takeSnapshot();
                            $(document.body).fadeIn(1000);
                        });
                    } else {
                        SoundController.playCounterSound();
                        animationCounter(++_counter);
                    }
                });
            }(1));
        });
    };

    exports.init = init;
}());