load("201224b0d1c296b45befd2285e95dd42.js");
// In `for (let x = EXPR; ;)`, if `x` appears within EXPR, it refers to the
// loop variable. Actually doing this is typically a TDZ error.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

assertThrowsInstanceOf(() => {
    for (let x = x; null.foo; null.foo++) {}
}, ReferenceError);

assertThrowsInstanceOf(() => {
    for (let x = eval('x'); null.foo; null.foo++) {}
}, ReferenceError);

assertThrowsInstanceOf(() => {
    for (let x = function () { with ({}) return x; }(); null.foo; null.foo++) {}
}, ReferenceError);
