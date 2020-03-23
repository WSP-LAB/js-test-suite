load("201224b0d1c296b45befd2285e95dd42.js");

function typeOf(o) {
    assertEq(typeof o, "object");
}

typeOf([]);
typeOf(new Float32Array());
typeOf(new Int32Array());
typeOf(new ArrayBuffer());
