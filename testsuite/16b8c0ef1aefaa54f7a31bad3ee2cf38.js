load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

function testNonStubGetter() {
    { let [] = []; (this.watch("x", function(p, o, n) { return /a/g.exec(p, o, n); })); };
    (function () { (eval("(function(){for each (x in [1, 2, 2]);});"))(); })();
    this.unwatch("x");
    return "ok";
}
assertEq(testNonStubGetter(), "ok");
