var proxyquire = require('proxyquireify')(require),
    effectMock = jasmine.createSpy('effectSpy'),
    mocks = {
        './Cam': {
            setEffect: effectMock
        }
    };

var EffectController = proxyquire('../../../assets/js/controller/Effects', mocks);

describe("Test Effects Controller", function () {
    var amountOfEffects = 9;

    it("getEffects should return all effects", function () {
        expect(EffectController.getEffects().length).toBe(amountOfEffects);
    });

    it("setEffects should call CamController Method", function () {
        EffectController.setEffect(0);
        expect(effectMock).toHaveBeenCalled();
    });

    it("setEffects should call CamController Method with a correct parameter", function () {
        var effectConfig = EffectController.getEffects()[0];
        effectConfig.effectObj = "SUT";
        EffectController.setEffect(0);
        expect(effectMock).toHaveBeenCalledWith("SUT");
    });
});