load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var BUGNUMBER = 1021835;
var summary = "Returning non-object from @@iterator should throw";

print(BUGNUMBER + ": " + summary);

let primitives = [
    1,
    true,
    undefined,
    null,
    "foo",
    Symbol.iterator
];

function f([]) {
}

for (let primitive of primitives) {
    let obj = {
        [Symbol.iterator]() {
            return primitive;
        }
    };
    assertThrowsInstanceOf(() => {
        let [] = obj;
    }, TypeError);
    assertThrowsInstanceOf(() => {
        [] = obj;
    }, TypeError);
    assertThrowsInstanceOf(() => {
        f(obj);
    }, TypeError);
}

if (typeof reportCompare === "function")
  reportCompare(0, 0);
