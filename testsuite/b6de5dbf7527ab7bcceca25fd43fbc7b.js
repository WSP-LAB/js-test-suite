load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| --ion-eager
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

[1, "", true, Symbol(), undefined].forEach(props => {
    assertEq(Object.getPrototypeOf(Object.create(null, props)), null);
});

assertThrowsInstanceOf(() => Object.create(null, null), TypeError);
