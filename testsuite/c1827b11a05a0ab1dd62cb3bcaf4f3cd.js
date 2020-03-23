load("201224b0d1c296b45befd2285e95dd42.js");
assertEq(["a"].map(escape)[0], ["a"].map(function(s) {return escape(s);})[0]);
