load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:SyntaxError

function testcase({}, a = b, ... x)  {
  "use strict";
  function f() { };
  with ( f(3) );
}
