load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| --ion-eager
x = [0, 0]
Object.freeze(x).map(function() {
    x.length = 6
})
assertEq(x.length,2);
