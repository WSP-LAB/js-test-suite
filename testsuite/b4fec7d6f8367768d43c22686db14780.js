load("201224b0d1c296b45befd2285e95dd42.js");
// Constant folding doesn't affect strict delete either.
// In particular, it doesn't affect whether |delete x| is a strict error.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

(function (x) {
    "use strict";

    // These senseless delete-expressions are legal even in strict mode.
    // Per ES5.1 11.4.1 step 2, each one does nothing and returns true.
    assertEq(delete (1 ? x : x), true);
    assertEq(delete (0 || x), true);
    assertEq(delete (1 && x), true);

    // Plain `delete x` is a SyntaxError though.
    assertThrowsInstanceOf(() => eval('delete x'), SyntaxError);
    assertThrowsInstanceOf(() => Function('"use strict"; delete x'), SyntaxError);
}());
