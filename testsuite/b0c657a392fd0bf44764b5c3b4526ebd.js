load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| --ion-eager
for (var i=0; i<3; i++)
    z = new Int32Array;

function f() {
    z.__proto__ = 2;
}

for (var i=0; i<3; i++)
    f();
