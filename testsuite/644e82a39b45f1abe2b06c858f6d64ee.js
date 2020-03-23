load("201224b0d1c296b45befd2285e95dd42.js");

var du = new Debugger();
if (typeof du.startTraceLogger === "function") {
    var failed = false;
    try {
        newGlobal().startTraceLogger();
        print("z");
    } catch (e) {
        failed = true;
    }

    assertEq(failed, true);
}
