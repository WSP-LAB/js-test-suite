load("201224b0d1c296b45befd2285e95dd42.js");

function X () {};
function Y () {};
function testCallProtoMethod() {
    var a = [new X, new X, __proto__, new Y, new Y];
}
testCallProtoMethod();

function testNot() {
    var r;
    for (var i = 0; i < 10; ++i)
        r = [];
}
testNot();
