var EnumTemplate = require("../../../assets/js/enums/Template"),
    mainTemplate = require("../../../templates/main.hbs"),
    introTemplate = require("../../../templates/intro.hbs"),
    auth_anim_Template = require("../../../templates/authenticationAnimation.hbs");

describe("Test Template Enum",function(){

    it("have 3 enum values",function(){
        var allEnums = EnumTemplate.enum.getAll();
        expect(allEnums.length).toBe(4);
    });

    it("main enum should collect the correct template",function(){
        expect(typeof EnumTemplate.enum.MAIN.tpl).toBe("function");
        expect(EnumTemplate.enum.MAIN.tpl()).toBe(mainTemplate());
    });

    it("intro enum should collect the correct template",function(){
        expect(typeof EnumTemplate.enum.INTRO.tpl).toBe("function");
        expect(EnumTemplate.enum.INTRO.tpl()).toBe(introTemplate());
    });

    it("auth_anim enum should collect the correct template",function(){
        expect(typeof EnumTemplate.enum.AUTH_ANIMATION.tpl).toBe("function");
        expect(EnumTemplate.enum.AUTH_ANIMATION.tpl()).toBe(auth_anim_Template());
    });

});