load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError

function test(a, b, c, d, e, {} = "zmi") {
    var r = 0
    r += Math.min(a, b, c, r.script.getLineOffsets(g.line0 + 3), e);
}
test();
