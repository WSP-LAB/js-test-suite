load("201224b0d1c296b45befd2285e95dd42.js");
var g1 = newGlobal();
schedulegc(g1);
gcslice(1);
function testEq(b) {
    var a = deserialize(serialize(b));
}
testEq(Array(1024).join(Array(1024).join((false))));
