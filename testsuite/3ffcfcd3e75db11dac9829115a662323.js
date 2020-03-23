load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
const nativeErrors = [
    InternalError,
    EvalError,
    RangeError,
    ReferenceError,
    SyntaxError,
    TypeError,
    URIError
];

assertEq(Reflect.getPrototypeOf(Error.prototype), Object.prototype)

for (const error of nativeErrors) {
    assertEq(Reflect.getPrototypeOf(error.prototype), Error.prototype);
}

if (typeof reportCompare === "function")
    reportCompare(0, 0);
