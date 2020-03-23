load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError
new DoWhileObject;
function DoWhileObject(breakOut, breakIn, iterations, loops) {
    loops.prototype = new DoWhile;
    this.looping;
}
function DoWhile(object) {
    do {} while (object);
}
