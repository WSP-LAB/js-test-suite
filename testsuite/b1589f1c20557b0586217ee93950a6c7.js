load("201224b0d1c296b45befd2285e95dd42.js");
var prox = new Proxy({}, {
  getOwnPropertyDescriptor: function() { return undefined; },
  has:                      function() { return true; },
});

// Don't crash.
newGlobal().__lookupSetter__.call(prox, "e");
