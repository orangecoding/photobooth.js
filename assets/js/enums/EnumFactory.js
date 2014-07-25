/**
 * enums/EnumFactory.js
 */
(function(){

    var $ = require("jquery");

    var AbstractEnum = function () {
        // name of the enum
        this._name = "";
        // stores all enum items / states
        this._enumArray = [];
    };

    AbstractEnum.prototype.toString = function () {
        return this._name;
    };

    AbstractEnum.prototype.getAll = function () {
        return this._enumArray;
    };


    /**
     * Creates a new enum with the given name and the given enum states.
     * A state can be of any type (string, object, ...).
     *
     * @param name {String} Name of the enum, will be used for toString on the enum.
     * @param enumObj {Object} Object with enum states like e.g. {ON : "on", OFF : "off"}.
     *                Enum objects should NOT include a property "name", because a function name() will be generated,
     *                which returns the property name (like "ON" in the example).
     * @return {Object} Enum object with all states and convenient methods.
     */
    var initEnum = function (name, enumObj) {
        var enumInstance = new AbstractEnum();
        enumInstance._enumArray = [];
        enumInstance._name = name;

        // build enum values
        $.each(enumObj, function (key, value) {
            // add getBy<PropertyName>() functions
            if (typeof value === "object") {
                $.each(value, function (propKey, propValue) {
                    if (value.hasOwnProperty(propKey)) {
                        // first letter shall be upper case
                        var propertyString = propKey.charAt(0).toUpperCase() + propKey.slice(1);
                        // create the function
                        enumInstance["getBy" + propertyString] = function (val) {
                            return this.getBy(propKey, val);
                        };
                        enumInstance["concat" + propertyString] = function (delimiter) {
                            return this.concat(propKey, delimiter);
                        };
                    }
                });
            }

            enumInstance[key] = value;
            enumInstance._enumArray.push(value);
            enumInstance[key]._name = key;
            if (typeof enumInstance[key] === "object") {
                enumInstance[key].toString = function () {
                    return this._name;
                };
                enumInstance[key].name = function () {
                    return this._name;
                };
            }
        });

        return enumInstance;
    };

    exports.initEnum = initEnum;
}());