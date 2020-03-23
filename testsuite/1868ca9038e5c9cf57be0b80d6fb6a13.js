load("201224b0d1c296b45befd2285e95dd42.js");
// Latin1
function f(someName) {
    someName();
}
try {
    f(3);
} catch(e) {
    assertEq(e.message.includes("someName"), true);
}

// TwoByte
function g(someName\u1200) {
    someName\u1200();
}
try {
    g(3);
} catch(e) {
    // Note: string is deflated; don't check for the \u1200.
    assertEq(e.message.includes("someName"), true);
}
