load("201224b0d1c296b45befd2285e95dd42.js");
// Don't assert.
"p".match(/(p)/);
assertEq(RegExp.$1, "p");
assertEq(RegExp.$2, "");

"x\ny\n".replace(/(^\n*)/, "");
assertEq(RegExp.$1, "");
assertEq(RegExp.$2, "");
