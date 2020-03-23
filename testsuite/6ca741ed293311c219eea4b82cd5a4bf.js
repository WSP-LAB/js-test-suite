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




function foo() {
    return lexicalVariableNotYetDefined;
}

function bar() {
    lexicalVariableNotYetDefinedSecond = 300;
    return lexicalVariableNotYetDefinedSecond;
}

for (var i = 0; i < 1000; i++)
    shouldThrowTDZ(foo);

let lexicalVariableNotYetDefined = 100;
assert(foo() === lexicalVariableNotYetDefined);


for (var i = 0; i < 1000; i++)
    shouldThrowTDZ(bar);
let lexicalVariableNotYetDefinedSecond = 200;
assert(bar() === 300);
