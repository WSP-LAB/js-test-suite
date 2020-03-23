load("201224b0d1c296b45befd2285e95dd42.js");
load("00e0aa336e6c8b65ee1f164279cff5fc.js");

var x = 5;
{
    let x = eval("this.x++");
    assertEq(evalInFrame(0, "x"), 5);
}
assertEq(x, 6);
