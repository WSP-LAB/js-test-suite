load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests that GetLocals on captured variables aren't eliminated too aggressively."
);

function foo() {
    var x;
    (function(){
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
        x = 42;
    })();
    var y = x;
    return y;
}

dfgShouldBe(foo, "foo()", "42");

load("cf1a0efae1078faee510f7bda78d4902.js");
