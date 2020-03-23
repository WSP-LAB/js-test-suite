load("201224b0d1c296b45befd2285e95dd42.js");
thrown = false
try {
    ("".x = Object.seal)
    "".x.valueOf();
} catch (e) {thrown = true}
assertEq(thrown, true);
