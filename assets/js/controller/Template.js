(function () {

    /**
     * read the templates and returns them
     * The templates will be precompiled using a browserify tranformer (with grunt)
     * After transformation, the template can be fetched here
     * @param _templateEnum
     * @returns {*}
     */
    var getTemplate = function (_templateEnum) {
        var template = _templateEnum.tpl({});
        return template;
    };

    exports.getTemplate = getTemplate;
}());