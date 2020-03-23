load("201224b0d1c296b45befd2285e95dd42.js");
function testPrimitiveConstructorPrototype() {
    var f = function(){};
    f.prototype = false;
    for (let j=0;j<5;++j) { new f; }
    return "ok";
}
assertEq(testPrimitiveConstructorPrototype(), "ok");
