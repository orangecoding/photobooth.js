(function () {
    var CamController = require("./Cam"),
        IntroView = require("../view/Intro");

    /**
     * if user want's to start photoBooth.JS, first ask for permission to access the camera
     * @param e
     */
    var onStartPhotoboothClicked = function (e) {
        e.preventDefault();
        CamController.init();
        IntroView.startAuthenticationAnimation();
    };

    exports.onStartPhotoboothClicked = onStartPhotoboothClicked;
}());