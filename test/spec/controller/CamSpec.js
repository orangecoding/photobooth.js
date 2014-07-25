var proxyquire = require('proxyquireify')(require),
    effectMock = jasmine.createSpy('effectSpy'),
    mocks = {
        './Cam': {
            setEffect: effectMock
        }
    };

var CamController = proxyquire('../../../assets/js/controller/Cam', mocks);

describe("CamController Test",function(){

    it("isSupported should return true",function(){
        expect(CamController.isSupported()).toBeFalsy();
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || function mock(){}
        expect(CamController.isSupported()).toBeTruthy();
    });

});