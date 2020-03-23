load("201224b0d1c296b45befd2285e95dd42.js");
function test() {
    for (let z = 0; z < 4; ++z) {
      uneval({ x: 9 });
      gc()
    }
    return "pass";
}
assertEq(test(), "pass");
