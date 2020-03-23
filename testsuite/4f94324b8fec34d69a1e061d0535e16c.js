load("201224b0d1c296b45befd2285e95dd42.js");
function initialize() {};
function test() {
eval("\
var Class = {\
  create : function() {\
    return function() {\
      this.initialize.apply(this, arguments);\
    }\
  }\
};\
var Foo = Class.create();\
Foo.prototype = {\
  initialize : function() {\
    this.bar = Foo();\
  }\
};\
var foo = new Foo();\
");
}
test();
