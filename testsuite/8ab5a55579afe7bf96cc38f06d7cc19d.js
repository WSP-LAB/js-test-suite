load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
function f() {}
var g = new Function();
delete Function;
function h() {}

assertEq(f.__proto__, g.__proto__);
assertEq(g.__proto__, h.__proto__);
assertEq(false, "Function" in this);

reportCompare("ok", "ok", "bug 569306");
