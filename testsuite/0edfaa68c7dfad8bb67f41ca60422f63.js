load("201224b0d1c296b45befd2285e95dd42.js");
load("00e0aa336e6c8b65ee1f164279cff5fc.js");

this.__defineGetter__("someProperty", function () { evalInFrame(1, "var x = 'success'"); });
function caller(obj) {
  var x = ({ dana : 'zuul' });
  obj.someProperty;
  return x;
}
assertEq(caller(this), "success");
