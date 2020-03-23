load("201224b0d1c296b45befd2285e95dd42.js");

for (var i = 0; i < 10; i++) {
  x = new ArrayBuffer(4)
  x.f = (function() {})
  new Uint16Array(x).set(JSON.parse)
  gcslice()
}

if (!this.SharedArrayBuffer)
  quit(0);

for (var i = 0; i < 10; i++) {
  x = new SharedArrayBuffer(4)
  x.f = (function() {})
  new Uint16Array(x).set(JSON.parse)
  gcslice()
}
