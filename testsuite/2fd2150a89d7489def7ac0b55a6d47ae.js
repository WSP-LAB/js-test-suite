load("201224b0d1c296b45befd2285e95dd42.js");
var buffer = new ArrayBuffer(100);

view = new DataView(buffer, undefined, undefined);
assertEq(view.buffer, buffer);
assertEq(view.byteOffset, 0);
assertEq(view.byteLength, 100);

view = new DataView(buffer, 20, undefined);
assertEq(view.buffer, buffer);
assertEq(view.byteOffset, 20);
assertEq(view.byteLength, 80);
