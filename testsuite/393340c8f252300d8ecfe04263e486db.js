load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:ReferenceError: can't access lexical
try {
    evaluate("let x = (() => { throw 3 })();");
} catch(e) {
    assertEq(e, 3);
}
Object.defineProperty(this, "x", {});
(function() { x = 3; })();
