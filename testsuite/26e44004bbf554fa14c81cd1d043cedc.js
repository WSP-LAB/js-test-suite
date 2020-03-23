load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests that creating TypedArrays of length 0 doesn't cause us to crash."
);

var array = new Uint8Array(0);

function foo() {
    return new Uint16Array(0);
}

var result = 0;

for (var i = 4000; i > 0; i--) {
    var newArray = foo();
    var otherArray = new Array(i);
    for (var j = 0; j < i; ++j)
        otherArray[j] = j;
    result += otherArray[i - 1];
}

if (result != (4000 * 3999) / 2)
    throw "Bad result: " + result;

load("cf1a0efae1078faee510f7bda78d4902.js");
