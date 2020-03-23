load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests that for-of iteration does not crashes."
);

function foo() {
    var o = Object.create(Array.prototype);
    for (var x of o) {
    }
}
foo();

load("cf1a0efae1078faee510f7bda78d4902.js");
