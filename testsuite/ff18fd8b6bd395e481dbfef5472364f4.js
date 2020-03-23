load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

const ThrowTypeError = function(){
    "use strict";
    return Object.getOwnPropertyDescriptor(arguments, "callee").get;
}();

assertDeepEq(Object.getOwnPropertyDescriptor(ThrowTypeError, "length"), {
    value: 0, writable: false, enumerable: false, configurable: false
});

assertEq(Object.isFrozen(ThrowTypeError), true);

if (typeof reportCompare == "function")
    reportCompare(true, true);
