load("201224b0d1c296b45befd2285e95dd42.js");
// Getting a property that exists on an ordinary object
// does not touch a proxy on its proto chain.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var angryHandler = new Proxy({}, {
    get(t, id) { throw new Error("angryHandler should not be queried (" + id + ")"); }
});
var angryProto = new Proxy({}, angryHandler);
var obj = Object.create(angryProto, {
    x: {value: 3},
    y: {get: () => 4}
});
assertThrowsInstanceOf(() => obj.z, Error);  // check that angryProto works
assertEq(obj.x, 3);
assertEq(obj.y, 4);
