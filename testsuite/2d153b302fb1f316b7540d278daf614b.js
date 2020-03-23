let globalLet = "let";
function globalFunction() { }
class globalClass { }
const globalConst = 20;
var globalVar = 21;
this.globalProperty = 22;

let sentinel = "__s__";

function assert(b) {
    if (!b)
        throw new Error("bad assertion");
}

function assertExpectations() {
    assert(sentinel === "__s__");
}


let errorCount = 0;
function assertProperError(e) {
    if (e instanceof SyntaxError && e.message.indexOf("Can't create duplicate variable") !== -1) {
        errorCount++;
    } else {
        assert(false);
    }

}

assertExpectations();

try {
    load("4730025865b15499d21b68b8c05e77e0.js");
} catch(e) {
    assertProperError(e);
}
assertExpectations();

try {
    load("92d508384ca2d19d6c003a04ea31f9e7.js");
} catch(e) {
    assertProperError(e);
}
assertExpectations();

try {
    load("adb92fd9cef2ddab9e1040cc8776accf.js");
} catch(e) {
    assertProperError(e);
}
assertExpectations();

try {
    load("dbfd3c4885f805c6390c3faea3fd3257.js");
} catch(e) {
    assertProperError(e);
}
assertExpectations();

try {
    load("05458f89a7dc2b45e242001cd04424a4.js");
} catch(e) {
    assertProperError(e);
}
assertExpectations();

// Checking if the implementation is following
// ES6 spec 8.1.1.4.14 http://www.ecma-international.org/ecma-262/6.0/index.html#sec-hasrestrictedglobalproperty

try {
    sentinel = "bad";
    assert(Object.getOwnPropertyDescriptor(this, "globalProperty").configurable);
    load("ccd4d49a0e4a14aa5a0ee6eca6a58359.js");
} catch(e) {
    assert(false);
}
assertExpectations();

try {
    sentinel = "bad";
    assert(Object.getOwnPropertyDescriptor(this, "Array").configurable);
    load("aeff3f938145c10cbb6768b96fe03193.js");
} catch(e) {
    assert(false);
}
assertExpectations();

try {
    sentinel = "bad";
    Object.defineProperty(this, 'foo', {value: 5, configurable: true, writable: true});
    load("c0cacb81dcf09739c66e246d9128fb95.js");
} catch(e) {
    assert(false);
}
assertExpectations();

try {
    Object.defineProperty(this, 'bar', {value: 5, configurable: false, writable: true});
    load("1ebdf0a0e42e207b632f9031e910e4c3.js");
} catch(e) {
    assertProperError(e);
}
assertExpectations();

assert(errorCount === 6);

try {
    sentinel = "bad";
    Object.defineProperty(this, 'zoo', {value: undefined, configurable: false, writable: true});
    load("b266071c0b052b43d4b28eb46c821982.js");
} catch(e) {
    assert(false);
}
assertExpectations();

