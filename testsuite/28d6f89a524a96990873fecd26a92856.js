load("201224b0d1c296b45befd2285e95dd42.js");
function testStringConstructorWithExtraArg() {
    for (let i = 0; i < 5; ++i)
        new String(new String(), 2);
    return "ok";
}
assertEq(testStringConstructorWithExtraArg(), "ok");
