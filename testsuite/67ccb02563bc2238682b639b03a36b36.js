load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests stability of the DFG compiler when you have a double use of a variable that is not revealed to be a double until after CFG simplification."
);

function foo(a) {
    var p = true;
    var x;
    if (p)
        x = 42;
    else
        x = "yo";
    return x + a;
}

dfgShouldBe(foo, "foo(0.5)", "42.5");


load("cf1a0efae1078faee510f7bda78d4902.js");
