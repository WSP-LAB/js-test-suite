load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| --ion-eager;error:TypeError

function testUKeyUObject(a, key1, key2, key3) {
    assertEq(a[-1](), "hi");
}
for (var i = 0; i < 5; i++) {
    testUKeyUObject({}, "a", "b", "c");
}
