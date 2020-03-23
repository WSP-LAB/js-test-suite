load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| allow-oom; allow-overrecursed

gcPreserveCode();
evaluate("gcparam(\"maxBytes\", gcparam(\"gcBytes\") + 4*1024);");
evaluate("\
function testDontEnum(F) { \
  function test() {\
    var upvar = \"\";\
    function f() { upvar += \"\"; }\
    typeof (new test(\"1\")) != 'function'\
  }\
  test();\
} \
var list = [];\
for (i in list)\
  var F = this[list[i]];\
actual = testDontEnum(F);\
");
