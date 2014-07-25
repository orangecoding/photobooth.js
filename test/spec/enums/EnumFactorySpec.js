var EnumTemplate = require("../../../assets/js/enums/Template");

describe("Test EnumFactory Enum",function() {

    var amountOfTemplateEnumValues = 4;

    it("should return all Enums", function () {
        var allEnums = EnumTemplate.enum.getAll();
        expect(allEnums.length).toBe(amountOfTemplateEnumValues);
    });

    it("toString() should return the correct string", function () {
        expect(EnumTemplate.enum.toString()).toBe("templates");
    });

    it("concat() should return the correct string", function () {
        expect(EnumTemplate.enum.toString()).toBe("templates");
    });
});