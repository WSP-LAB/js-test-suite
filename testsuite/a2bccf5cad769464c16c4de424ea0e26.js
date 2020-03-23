load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("9f65b4024a3bba5864aa373908b00833.js");
// Test that callees that resolve to bindings on the global object or the
// global lexical environment get an 'undefined' this inside with scopes.

let g = function () { "use strict"; assertEq(this, undefined); }
function f() { "use strict"; assertEq(this, undefined); }

with ({}) { 
  // f is resolved on the global object
  f();
  // g is resolved on the global lexical environment
  g();
}

f();
g();

if (typeof reportCompare === "function")
  reportCompare(true, true);
