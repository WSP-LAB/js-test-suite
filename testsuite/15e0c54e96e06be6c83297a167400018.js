load("201224b0d1c296b45befd2285e95dd42.js");
// TDZ checks work in destructuring default expressions,
// even after the variables are initialized the first time.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

assertThrowsInstanceOf(() => {
    // should throw the second time through: b is uninitialized
    for (const {a=b, b} of [{a:1, b:2}, {b:3}]) {}
}, ReferenceError);
