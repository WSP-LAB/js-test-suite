function assert(cond) {
    if (!cond)
        throw new Error("broke assertion");
}
noInline(assert);
function shouldThrowInvalidConstAssignment(f) {
    var threw = false;
    try {
        f();
    } catch(e) {
        if (e.name.indexOf("TypeError") !== -1 && e.message.indexOf("readonly") !== -1)
            threw = true;
    }
    assert(threw);
}
noInline(shouldThrowInvalidConstAssignment);


const constValue = "const";
const {a: destructureObj} = {a: 20};
const [destructureArr] = [40];

function foo() {
    constValue = 20;
}

function bar() {
    destructureObj = 100;
}

function baz() {
    destructureArr = 100;
}

for (var i = 0; i < 1000; i++) {
    shouldThrowInvalidConstAssignment(foo);
    assert(constValue === "const");

    shouldThrowInvalidConstAssignment(bar);
    assert(destructureObj === 20);

    shouldThrowInvalidConstAssignment(baz);
    assert(destructureArr === 40);
}


