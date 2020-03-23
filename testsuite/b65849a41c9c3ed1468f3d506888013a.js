load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this))
    quit();
function test() {
    function foo() {
        return 1;
    };
    oomTest(() => {
        gc();
        foo.toString();
    });
}
var s = ";".repeat(70000);
s += test.toString() + "test()";
s += ";".repeat(70000);
eval(s);
