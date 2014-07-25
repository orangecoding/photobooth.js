var TemplateController = require('../../../assets/js/controller/Template');

describe("TemplateController Test", function(){
   it("",function(){
      var templateEnumMock = {
          tpl : function(){
              return "I would be a template";
          }
      };
       spyOn(templateEnumMock, 'tpl').and.callThrough();

       var templateFake = TemplateController.getTemplate(templateEnumMock);

       expect(templateEnumMock.tpl).toHaveBeenCalled();
       expect(templateFake).toBe("I would be a template");
   });
});