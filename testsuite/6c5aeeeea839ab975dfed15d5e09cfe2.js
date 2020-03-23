load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("99af2c3994932cf7fcec8ec85c6dc330.js");
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

for (let ctor of typedArrayConstructors) {
    for (let primitive of primitives) {
        let arg = {
            [Symbol.iterator]() {
                return primitive;
            }
        };
        assertThrowsInstanceOf(() => {
            new ctor(arg);
        }, TypeError);
    }
}

if (typeof reportCompare === "function")
  reportCompare(0, 0);
