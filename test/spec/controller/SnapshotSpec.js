var proxyquire = require('proxyquireify')(require),
    $ = require("jquery"),
    toBlobMock = jasmine.createSpy(),
    UiComponentsMock = {
        find: function(){
            return [{
                toBlob: toBlobMock
            }]
        }
    };
    var saveAsMock = jasmine.createSpy('saveAsMock'),
    mocks = {
        '../components/UiComponents': {
            getMainVideo: function(){return UiComponentsMock}
        },
        '../libs/FileSaver': {
            saveAs: saveAsMock
        }
    };

var SnapshotController = proxyquire('../../../assets/js/controller/Snapshot', mocks);

describe("SnapshotController Test", function() {
    it("onStartPhotoboothClicked should trigger initialization", function () {
        SnapshotController.takeSnapshot();
        expect(toBlobMock).toHaveBeenCalledWith(jasmine.any(Function));
    });
});