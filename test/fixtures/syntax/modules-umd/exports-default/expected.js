"use strict";

(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  }
})(function (exports) {
  exports.default = 42;
  exports.default = {};
  exports.default = [];
  exports.default = foo;
  exports.default = function() {};

  exports.default = function() {
    var _class = function() {};
    return _class;
  }();

  exports.default = function foo() {};

  exports.default = function() {
    var foo = function foo() {};
    return foo;
  }();
});
