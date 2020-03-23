load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
function f(x) {
    Object.defineProperty(arguments, 0, {
        get: function() {}
    });
    return arguments;
}

var obj = f(1);
assertEq(obj[0], undefined);
assertEq(Object.getOwnPropertyDescriptor(obj, 0).set, undefined);
assertThrowsInstanceOf(() => { "use strict"; obj[0] = 1; }, TypeError);

reportCompare(0, 0);
