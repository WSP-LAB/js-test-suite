load("e2371540d876710daf38e749390aa2a3.js");
//@ runNoFTL

function foo() {
    var {0: i, 1: j, length} = arguments;
    return i + j + length;
}

var result = 0;
for (var i = 0; i < 1000000; ++i)
    result += foo(i, 1);

if (result != 500002500000)
    throw "Bad result: " + result;

load("cf1a0efae1078faee510f7bda78d4902.js");
