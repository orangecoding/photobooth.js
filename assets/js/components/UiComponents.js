/**
 * Holds references to the actual DOM Nodes. Each element in uiElements will get it's
 * own exported function
 */
(function () {
    var $ = require("jquery");

    var uiElements = {
        getSnapshotButton: "#snapShot",
        getMainVideo: "#mainVideo",
        getStartButton: "#startPhotobooth",
        getAnimationDiv: "#authAnimation",
        getSnapshotCounter: "#snapshotCounter",
        createNewEffectCanvas: "<canvas class='effectCanvas'></canvas>"
    };

    /**
     * export each reference as a getter function
     */
    (function () {
        var uiKeys = Object.keys(uiElements);
        $.each(uiKeys, function (idx, key) {
            var element = uiElements[key];
            exports[key] = function () {
                return $(element);
            };
        });
    })();
}());