load("e2371540d876710daf38e749390aa2a3.js");
function foo(o) {
    var f = o[0];
    return [f(), f.f];
}

function bar() {
    return 42;
}

bar.f = 23;

var expected = "[42, 23]";

silentTestPass = true;
noInline(foo);

for (var i = 0; i < 100; i = dfgIncrement({f:foo, i:i + 1, n:50})) {
    if (i == 95) {
        delete bar.f;
        bar.g = 36;
        expected = "[42, void 0]";
    }
    shouldBe("foo([bar])", expected);
}

load("cf1a0efae1078faee510f7bda78d4902.js");
