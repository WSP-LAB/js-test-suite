load("201224b0d1c296b45befd2285e95dd42.js");
var buffer = new ArrayBuffer(512 * 1024);
var ta = new Uint8Array(buffer);

function store() { ta[0x1234] = 42; }

store();
store();
store();

detachArrayBuffer(buffer);

store();
