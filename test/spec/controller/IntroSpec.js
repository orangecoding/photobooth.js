var proxyquire = require('proxyquireify')(require),
    initFunctionMock = jasmine.createSpy('initFunctionMock'),
    startAuthenticationAnimationFunctionMock = jasmine.createSpy('startAuthenticationAnimationFunctionMock'),
    mocks = {
        './Cam': {
            init: initFunctionMock
        },
        '../view/Intro': {
            startAuthenticationAnimation: startAuthenticationAnimationFunctionMock
        }
    };

var IntroController = proxyquire('../../../assets/js/controller/Intro', mocks);

describe("IntroController Test", function(){
    it("onStartPhotoboothClicked should trigger initialization", function(){
        var event = {
            preventDefault: function(){}
        };
        spyOn(event, 'preventDefault');
        IntroController.onStartPhotoboothClicked(event);

        expect(event.preventDefault).toHaveBeenCalled();
        expect(initFunctionMock).toHaveBeenCalled();
        expect(startAuthenticationAnimationFunctionMock).toHaveBeenCalled();
    });
});