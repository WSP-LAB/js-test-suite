load("201224b0d1c296b45befd2285e95dd42.js");
// throw, don't crash

var actual = "";

try {

var x = new Proxy({}, {
    defineProperty: function(target, name, desc) {
      Object.defineProperty(x, name, desc)
    },
});

Object.defineProperty(x, "", ({
  get: function() {}
}))

} catch (e) {
    actual = '' + e;
}

assertEq(actual, "InternalError: too much recursion");
