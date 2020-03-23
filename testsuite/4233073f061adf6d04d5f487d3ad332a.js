load("201224b0d1c296b45befd2285e95dd42.js");
Object.defineProperty(Function.prototype, "prototype", {
  get: function() { throw 17; },
  set: function() { throw 42; }
});
this.hasOwnProperty("Intl");
