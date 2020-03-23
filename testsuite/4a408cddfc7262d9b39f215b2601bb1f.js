load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:TypeError

x = [];
x.unshift(Uint8ClampedArray);
x.forEach(Array.prototype.push.bind(new Uint8ClampedArray))
