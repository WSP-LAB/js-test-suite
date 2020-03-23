load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| --ion-eager

function ionCompiledEagerly() {
    Math.random; // establish Math.random's identity for inlining
    return function() {
        return +Math.random(); // call will be inlined
    };
}

var alreadyIonCompiled = ionCompiledEagerly();
assertEq(alreadyIonCompiled() < 1, true);
