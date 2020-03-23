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


assertEq(Reflect.ownKeys(Error.prototype).toString(), "toSource,toString,message,name,stack,constructor");
assertEq(Error.prototype.name, "Error");
assertEq(Error.prototype.message, "");

for (const error of nativeErrors) {
    assertEq(Reflect.ownKeys(error.prototype).toString(), "message,name,constructor");
    assertEq(error.prototype.name, error.name);
    assertEq(error.prototype.message, "");
    assertEq(error.prototype.constructor, error);
}

if (typeof reportCompare === "function")
    reportCompare(0, 0);
