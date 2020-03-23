load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: too much recursion

function testUniqueness(asmJSModule) {
    var f = asmJSModule();
}
function lambda() {
    var x = function inner() { "use asm"; function g() {} return g };
    return lambda();
}
testUniqueness(lambda);
