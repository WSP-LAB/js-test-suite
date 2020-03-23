load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests that having a dead, and redundant, use of array.length doesn't cause compiler crashes."
);

function foo(array) {
    var x = array.length; // This is dead. If it wasn't, it would be redundant with the one below.
    return array.length;
}

dfgShouldBe(foo, "foo([1, 2, 3])", "3");

load("cf1a0efae1078faee510f7bda78d4902.js");
