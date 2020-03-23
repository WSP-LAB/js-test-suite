load("e2371540d876710daf38e749390aa2a3.js");
description(
"Regression test for https://webkit.org/b/140033. This test should run without crashing."
);

function defineADeadFunction(x, y)
{
    var u;
    var a = u;
    var b = x;

    if (x > 1500)
        b -= y;

    var unused = function() {
        return 42;
    }

    return b;
}

var result = 0;
for (var i = 1; i < 2000; i++)
    result += defineADeadFunction(i, " ");

load("cf1a0efae1078faee510f7bda78d4902.js");
