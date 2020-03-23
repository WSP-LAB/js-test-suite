load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
var a = function() {
    return function ({x: arguments}) {
        return arguments;
    }
}
var b = eval(uneval(a));

assertEq(a()({x: 1}), 1);
assertEq(b()({x: 1}), 1);

if (typeof reportCompare === "function")
    reportCompare(true, true);
