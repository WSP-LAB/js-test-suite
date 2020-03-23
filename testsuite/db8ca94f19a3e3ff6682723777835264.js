load("e2371540d876710daf38e749390aa2a3.js");
description("Verify that we don't hang while handling an exception for an undefined native function.");

myString = "The quick brown fox....";

for (i = 0; i < 1000; i++)
{
    try {
        if (myString.search("end of comment */") != -1)
            testFailed("Incorrect index returned from String.search(), expected -1");
    } catch (e) {
        break;
    }

    if (i == 900)
        String.prototype.search = undefined;
}

testPassed("Properly handled undefined native function");

load("cf1a0efae1078faee510f7bda78d4902.js");
