load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests that the DFG is appropriately conservative for may-aliased but not must-aliased PutClosureVar and GetClosureVar."
);

function foo(bar, baz) {
    var x = bar();
    baz();
    var y = bar();
    return x + y;
}

function thingy() {
    var x = 42;
    
    return {
        bar: function() {
            return x;
        },
        baz: function() {
            x = 71;
        }
    };
}

function runIt() {
    var o = thingy();
    return foo(o.bar, o.baz);
}

noInline(foo);
while (!dfgCompiled({f:foo}))
    runIt();

shouldBe("runIt()", "113");

load("cf1a0efae1078faee510f7bda78d4902.js");
