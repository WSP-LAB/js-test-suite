load("201224b0d1c296b45befd2285e95dd42.js");
var bytes = [0xff, 0xf7, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff]; // big-endian
bytes.reverse(); // if testing on little-endian
var result = new Float64Array(new Uint8Array(bytes).buffer)[0];

// Check that this doesn't crash
isNaN(result + 0);
