load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TestComplete
// onPop fires when frames throw an exception.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
var g = newGlobal();
var dbg = new Debugger(g);

function test(type, provocation) {
    var log;

    // Help people figure out which 'test' call failed.
    print("type:        " + uneval(type));
    print("provocation: " + uneval(provocation));

    dbg.onDebuggerStatement = function handleDebuggerStatement(f) {
        log += 'd';
    };

    dbg.onEnterFrame = function handleEnterFrame(f) {
        log += '(';
        assertEq(f.type, type);
        f.onPop = function handlePop(c) {
            log += ')';
            assertEq(c.throw, 'mud');
        };
    };

    log = '';
    assertThrowsValue(provocation, 'mud');
    assertEq(log, "(d)");

    print();
}

g.eval("function f() { debugger; throw 'mud'; }");
test("call", g.f);
test("call", function () { return new g.f; });
test("eval", function () { return g.eval("debugger; throw \'mud\';"); });
test("global", function () { return g.evaluate("debugger; throw \'mud\';"); });
throw 'TestComplete';
