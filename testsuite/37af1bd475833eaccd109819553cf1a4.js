load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests what happens if we fail to constant fold a LogicalNot that leads into a branch, when the CFA proves that the LogicalNot has a constant value."
);

function foo1(o) {
    if (!!o.thingy)
        return o.thingy(42);
    else
        return o.otherThingy(57);
}

function foo2(o) {
    if (!o.thingy)
        return o.otherThingy(42);
    else
        return o.thingy(57);
}

function Stuff() {
}

Stuff.prototype = {
    thingy: function(x) { return x + 1; },
    otherThingy: function(x) { return x - 1; }
};

dfgShouldBe(foo1, "foo1(new Stuff())", "43");
dfgShouldBe(foo2, "foo2(new Stuff())", "58");

load("cf1a0efae1078faee510f7bda78d4902.js");
