load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| --ion-eager
x = [ "CNY", "TWD", "invalid" ];
Object.freeze(x).map(function() {
    x.length = 6
})
