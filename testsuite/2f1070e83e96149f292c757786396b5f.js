load("201224b0d1c296b45befd2285e95dd42.js");
// Do not assert.

var s = "a";
var b = 32767;

for (var i = 0; i < 10; ++i) {
  b = b & s.charCodeAt();
}
