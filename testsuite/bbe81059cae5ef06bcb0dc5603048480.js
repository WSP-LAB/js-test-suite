load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| allow-oom; 
function testBug507425() {
    var r = /x/;
    for (var i = 0; i < 3; i++)
        r.lastIndex = 0;          // call a setter
    var s = ';';
    try {
        for (i = 0; i < 80; i++)
            s += s;                   // call js_CanLeaveTrace
    } catch (exc) {
        return "ok";
    }
}
assertEq(testBug507425(), "ok");
