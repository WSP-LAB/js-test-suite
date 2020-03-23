load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError
gczeal(2,1);
(function () {
  var m = {}
  return { stringify: stringify };
})();
