(function () {

    var UiComponents = require("../components/UiComponents"),
        saveAs = require("../libs/FileSaver");

    /**
     * take s photo and save it to the harddrive
     */
    var takeSnapshot = function () {
        UiComponents.getMainVideo().find("canvas")[0].toBlob(function (_blob) {
            saveAs(_blob, "Screenshot.png");
        });
    };

    exports.takeSnapshot = takeSnapshot;
}());
