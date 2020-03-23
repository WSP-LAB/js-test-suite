load("e2371540d876710daf38e749390aa2a3.js");
description(
"Checks that sorting an array with a side-effecting comparison function doesn't trigger assertions."
);

var array = [];

for (var i = 0; i < 2000; ++i)
    array.push(i);

array.sort(function(a, b) {
    array.shift();
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    return 0;
});

testPassed("It worked.");



load("cf1a0efae1078faee510f7bda78d4902.js");
