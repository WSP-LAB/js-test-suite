load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("9f65b4024a3bba5864aa373908b00833.js");
// @@unscopables continues to work after exiting the relevant `with` block,
// if the environment is captured by a closure.

let env = {
    x: 9000,
    [Symbol.unscopables]: {x: true}
};

function make_adder(x) {
    with (env)
        return function (y) { return x + y; };
}
assertEq(make_adder(3)(10), 13);

// Same test, but with a bunch of different parts for bad luck
let x = 500;
function make_adder_with_eval() {
    with (env)
        return eval('y => eval("x + y")');
}
assertEq(make_adder_with_eval()(10), 510);

reportCompare(0, 0);
