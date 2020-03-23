load("201224b0d1c296b45befd2285e95dd42.js");
var log;
function b(x) { log += 'b'; return 'B'; }
function g() {
    log = '';
    var a = {toString: function () { log += 'a'; return 'A'; }};
    assertEq("[" + a + b() + "]", "[AB]");
    assertEq(log, "ab");
}

for (var i = 0; i < 1000; ++i)
    g();

