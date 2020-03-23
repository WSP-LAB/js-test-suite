load("201224b0d1c296b45befd2285e95dd42.js");
this.x = [];
Function.apply(null, this.x);
Object.defineProperty(this, "x", {get: valueOf});
assertEq(evaluate("this.x;"), this);
