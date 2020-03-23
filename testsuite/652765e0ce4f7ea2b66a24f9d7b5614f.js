load("201224b0d1c296b45befd2285e95dd42.js");
Object.defineProperty(Object.prototype, 1, {get: function() { this.foo++; return 23 }});
assertEq([1,,].pop(), 23);
