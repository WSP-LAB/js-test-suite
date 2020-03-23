load("201224b0d1c296b45befd2285e95dd42.js");
function testConstructorBail() {
    for (let i = 0; i < 5; ++i) new Number(/x/);
}
testConstructorBail();
