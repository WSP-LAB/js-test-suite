load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
class foo extends Array { }

function testArrs(arrs) {
    for (let arr of arrs) {
        assertEq(Object.getPrototypeOf(arr), foo.prototype);
    }
}

var arrs = [];
for (var i = 0; i < 25; i++)
    arrs.push(new foo(1));

testArrs(arrs);

arrs[0].nonIndexedProp = "uhoh";

arrs.push(new foo(1));

testArrs(arrs);

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
