function assert(cond) {
    if (!cond)
        throw new Error("broke assertion");
}
noInline(assert);

function shouldThrowTDZ(func) {
    var hasThrown = false;
    try {
        func();
    } catch(e) {
        if (e.name.indexOf("ReferenceError") !== -1)
            hasThrown = true;
    }
    assert(hasThrown);
}
noInline(shouldThrowTDZ);


let b = false;
function foo() {
    if (b) {
        x = x;
        return x;
    }
}
foo(); // Link as UnresolvedProperty.

b = true;
let x = "x";
for (var i = 0; i < 1000; i++) {
    assert(foo() === "x");
    assert(x === "x");
}

x = 20;
x = 40;
for (var i = 0; i < 1000; i++) {
    assert(foo() === 40);
    assert(x === 40);
}
