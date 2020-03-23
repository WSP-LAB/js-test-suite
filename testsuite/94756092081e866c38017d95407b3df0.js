load("e2371540d876710daf38e749390aa2a3.js");
description("Regression test for https://webkit.org/b/150513.");

// This test verifies that we can properly handle calling a virtual JavaScript
// function that fails during CodeBlock generation.

var functions = [];

function init()
{
    functions.push(new Function("a", "return a"));
    functions.push(new Function("a", "return a"));
    functions.push(new Function("a", "return a"));
}

function test()
{
    for (var i = 0; i < 100000; i++) {
        var f;
        if (i % 1000 == 999) {
            testRunner.failNextNewCodeBlock();
            f = functions[2];
        } else
            f = functions[i % 2];

        try {
            var result = f(1);
            if (result != 1)
                testFailed("Wrong result, expected 1, got " + result);
        } catch (e) {
        }
    }
}

init();

test();

testPassed("Didn't crash when calling a virtual JavaScript function that doesn't have a CodeBlock.");

load("cf1a0efae1078faee510f7bda78d4902.js");
