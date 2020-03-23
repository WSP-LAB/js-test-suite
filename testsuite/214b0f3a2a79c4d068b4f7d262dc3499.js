load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests that if you alias the arguments in a very small function, arguments simplification still works."
);

function foo() {
    var args = arguments;
    return args[0] + args[1];
}

silentTestPass = true;
noInline(foo);

for (var i = 0; i < 200; i = dfgIncrement({f:foo, i:i + 1, n:100}))
    shouldBe("foo(i, i + 1)", "" + (i + i + 1));

load("cf1a0efae1078faee510f7bda78d4902.js");
