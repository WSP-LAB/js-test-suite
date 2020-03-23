load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
var x = new ArrayBuffer(2);

var test = function(newProto) {
try {
    x.__proto__ = newProto;
    return false;
} catch(e) {
    return true;
}
}

assertEq(test(x), true);
assertEq(test({}), true);
assertEq(test(null), true);

reportCompare(true, true);
