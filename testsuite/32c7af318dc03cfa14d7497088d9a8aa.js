load("201224b0d1c296b45befd2285e95dd42.js");
// Complicated whitebox test for bug 487845.
function testGlobalShapeChangeAfterDeepBail() {
    function f(name) {
        this[name] = 1;  // may change global shape
        for (var i = 0; i < 4; i++)
            ; // MonitorLoopEdge eventually triggers assertion
    }

    // When i==3, deep-bail, then change global shape enough times to exhaust
    // the array of GlobalStates.
    var arr = [[], [], [], ["bug0", "bug1", "bug2", "bug3", "bug4"]];
    for (var i = 0; i < arr.length; i++)
        arr[i].forEach(f);
}
testGlobalShapeChangeAfterDeepBail();
