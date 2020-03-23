load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

assertThrowsInstanceOf(function () {
i = 0;
do {
with({
    TestCase: Float64Array
}) for each(let TestCase in [TestCase]) {}
 } while (i++ < 10);
function TestCase(n, d, e, a) {}
}, ReferenceError);
