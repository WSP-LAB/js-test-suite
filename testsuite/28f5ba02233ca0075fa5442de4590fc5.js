load("201224b0d1c296b45befd2285e95dd42.js");
for (a of []) {}
var log = "";
(function() {
  for (a of [,0]) {}
  const y = "FOO";
  log += y;
  function inner() { log += y; }
})()
assertEq(log, "FOO");
