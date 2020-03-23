load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

//test no multitrees assert
function testBug462388() {
    var c = 0, v; for each (let x in ["",v,v,v]) { for (c=0;c<4;++c) { } }
    return true;
}
assertEq(testBug462388(), true);
