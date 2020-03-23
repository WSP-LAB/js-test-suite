load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("9f65b4024a3bba5864aa373908b00833.js");
// Tests that newer-type functions (i.e. anything not defined by regular function declarations and
// expressions) throw when accessing their 'arguments' and 'caller' properties.

// 9.2.7 (AddRestrictedFunctionProperties) defines accessors on Function.prototype which throw on
// every 'get' and 'set' of 'caller' and 'arguments'.
// Additionally, 16.2 (Forbidden Extensions) forbids adding properties to all non-"legacy" function
// declarations and expressions. This creates the effect that all newer-style functions act like
// strict-mode functions when accessing their 'caller' and 'arguments' properties.

const container = {
    async asyncMethod() {},
    *genMethod() {},
    method() {}
};

[
    async function(){},
    function*(){},
    () => {},
    async () => {},

    container.asyncMethod,
    container.genMethod,
    container.method
].forEach(f => {
    checkArgumentsAccess(f);
    checkCallerAccess(f);
});

function checkArgumentsAccess(f) {
    assertThrowsInstanceOf(() => f.arguments, TypeError,
                           `Expected 'arguments' property access to throw on ${f}`);
}

function checkCallerAccess(f) {
    assertThrowsInstanceOf(() => f.caller, TypeError,
                           `Expected 'caller' property access to throw on ${f}`);
}

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete");
