load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| allow-oom; allow-overrecursed

gcparam("maxBytes", gcparam("gcBytes") + 1024);
test();
function test() {
  var upvar = "";
  function f() { upvar += ""; }
  test();
  eval('');
}
