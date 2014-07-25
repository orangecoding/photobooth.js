describe("SoundController Test", function(){

    var $ = require("jquery"),
        playSoundMock = jasmine.createSpy();

    (function mockIonSoundLib(){
        $.ionSound = function(){
            $.ionSound.play = playSoundMock
        };
    }());

    var SoundController = require('../../../assets/js/controller/Sound');

    it("playCounterSound should try to play the counter sound", function(){
        SoundController.playCounterSound();
        expect(playSoundMock).toHaveBeenCalledWith("counter");
    });

    it("playCounterSound should try to play the camera sound", function(){
        SoundController.playCameraSound();
        expect(playSoundMock).toHaveBeenCalledWith("camera");
    });

});