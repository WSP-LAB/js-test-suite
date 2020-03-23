load("201224b0d1c296b45befd2285e95dd42.js");
function f(a, b) { return a + " " + b; }

for (var i = 0; i < 10; ++i) {
    var s = '';
    var a = {toString: function () { s += 'a'; return 'a'; }};
    var b = {toString: function () { s += 'b'; return 'b'; }};
    f(a, b);
    assertEq(s, 'ab');
}

