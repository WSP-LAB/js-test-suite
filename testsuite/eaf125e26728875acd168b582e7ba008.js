load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests that a convert_this optimized for the case where this is null behaves correctly when you then pass an object."
);

function foo() {
    return this.x;
}

x = 42;

silentTestPass = true;
noInline(foo);

for (var i = 0; i < 200; i = dfgIncrement({f:foo, i:i + 1, n:100})) {
    var me;
    if (i < 150)
        me = null;
    else
        me = this;
    shouldBe("foo.call(me)", "42");
}

load("cf1a0efae1078faee510f7bda78d4902.js");
