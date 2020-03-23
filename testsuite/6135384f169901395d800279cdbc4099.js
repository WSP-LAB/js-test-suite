load("e2371540d876710daf38e749390aa2a3.js");
// This test won't get into the FTL currently, since the foo() function just exits a lot.
//@ noFTLRunLayoutTest

description(
"Tests that adding things that aren't numbers using ++ does not crash or generate bogus code."
);

function foo(a) {
    a++;
    return a;
}

dfgShouldBe(foo, "foo(\"foo\")", "NaN");

load("cf1a0efae1078faee510f7bda78d4902.js");
