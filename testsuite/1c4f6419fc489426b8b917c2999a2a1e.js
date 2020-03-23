load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("9f65b4024a3bba5864aa373908b00833.js");
// When env[@@unscopables].x changes, bindings can appear even if env is inextensible.

let x = "global";
let unscopables = {x: true};
let env = Object.create(null);
env[Symbol.unscopables] = unscopables;
env.x = "object";
Object.freeze(env);

for (let i = 0; i < 1004; i++) {
    if (i === 1000)
        unscopables.x = false;
    with (env) {
        assertEq(x, i < 1000 ? "global" : "object");
    }
}

reportCompare(0, 0);
