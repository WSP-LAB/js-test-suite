load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("9f65b4024a3bba5864aa373908b00833.js");
// In these cases, @@unscopables should not be consulted.

// Because obj has no properties `assertEq` or `x`,
// obj[@@unscopables] is not checked here:
var obj = {
    get [Symbol.unscopables]() {
        throw "tried to read @@unscopables";
    }
};
var x = 3;
with (obj)
    assertEq(x, 3);

// If @@unscopables is present but not an object, it is ignored:
for (let nonObject of [undefined, null, "nothing", Symbol.for("moon")]) {
    let y = 4;
    let obj2 = {[Symbol.unscopables]: nonObject, y: 5};
    with (obj2)
        assertEq(y, 5);
}

reportCompare(0, 0);
