load("201224b0d1c296b45befd2285e95dd42.js");
// "use strict" is not special as the body of an arrow function without braces.

var f = (a = obj => { with (obj) return x; }) => "use strict";
assertEq(f(), "use strict");
