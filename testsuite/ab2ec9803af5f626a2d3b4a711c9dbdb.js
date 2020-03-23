load("201224b0d1c296b45befd2285e95dd42.js");
function nestedExit(x) {
    var q = 0;
    for (var i = 0; i < 10; ++i)
    {
        if (x)
            ++q;
    }
}
function nestedExitLoop() {
    for (var j = 0; j < 10; ++j)
        nestedExit(j < 7);
    return "ok";
}
assertEq(nestedExitLoop(), "ok");
