load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests what would happen if you have a break in the finally block. The correct outcome is for this test to not crash during bytecompilation."
);

function foo() {
    do {
        do {} while (false);

        try {
            do {
                return null;
            } while (false);
        } finally {
            break;
        }
    } while (false);
}

foo();
testPassed("It worked.");


load("cf1a0efae1078faee510f7bda78d4902.js");
