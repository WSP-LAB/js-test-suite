load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
function test() {
    delete arguments[1];
    return Array.prototype.join.call(arguments);
}
assertEq(test(1,2,3), "1,,3");
Object.prototype[1] = "ponies!!!1";
assertEq(test(1,2,3), "1,ponies!!!1,3");
reportCompare(true,true);
