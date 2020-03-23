load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError
function TimeFunc(func) {
    for(var y=0; y<256; y++) func(y);
}
function nestedExit2() {
    TimeFunc(TimeFunc);
}
assertEq(nestedExit2(), "ok");
