load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:too much recursion
function test() {
    var a = [""];
    var i = 0;
    for (var e in a) {
        if (i == 10) {
            for (var g in []) {}
        }
        throw test();
    }
}
test();
