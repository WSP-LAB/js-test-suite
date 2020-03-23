load("e2371540d876710daf38e749390aa2a3.js");
description(
"This tests that floating point math supports for denormalized numbers."
);

var count = 0;
var value = 1;
while (value / 2) {
    value /= 2;
    ++count;
}

if (count == 1074)
    debug("PASS");
else
    debug("FAIL: expected 1074, actual " + count);


load("cf1a0efae1078faee510f7bda78d4902.js");
