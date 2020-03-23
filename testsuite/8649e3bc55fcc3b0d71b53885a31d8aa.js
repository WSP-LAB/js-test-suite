load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("9f65b4024a3bba5864aa373908b00833.js");
// Strict assignment to the name of a property that's masked by @@unscopables
// throws a ReferenceError.

let env = {k: 1};
let f;
with (env) {
    f = function () {
        "use strict";
        k = 2;
    };
}

f();
assertEq(env.k, 2);

env[Symbol.unscopables] = {k: true};
assertThrowsInstanceOf(f, ReferenceError);

// @@unscopables is tested when the LHS of assignment is evaluated, so there is
// no effect on the assignment if it is changed while evaluating the RHS.
let g;
with (env) {
    g = function () {
        "use strict";
        k = (env[Symbol.unscopables].k = true, 3);
    }
}
env[Symbol.unscopables].k = false;
g();
assertEq(env.k, 3);

reportCompare(0, 0);
