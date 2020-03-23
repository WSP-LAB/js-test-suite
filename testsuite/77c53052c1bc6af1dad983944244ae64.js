load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

function bug464403() {
    print(8);
    var u = [print, print, function(){}]
    for each (x in u) for (u.e in [1,1,1,1]);
    return "ok";
}
assertEq(bug464403(), "ok");
