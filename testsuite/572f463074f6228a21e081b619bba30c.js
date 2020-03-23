load("201224b0d1c296b45befd2285e95dd42.js");
// Array.of can be transplanted to other classes.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var hits = 0;
function Bag() {
    hits++;
}
Bag.of = Array.of;

hits = 0;
var actual = Bag.of("zero", "one");
assertEq(hits, 1);

var expected = new Bag;
expected[0] = "zero";
expected[1] = "one";
expected.length = 2;
assertDeepEq(actual, expected);

hits = 0;
actual = Array.of.call(Bag, "zero", "one");
assertEq(hits, 1);
assertDeepEq(actual, expected);

