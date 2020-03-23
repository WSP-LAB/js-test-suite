load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
function checkErr(f, className) {
    var expected;
    if (className !== "")
        expected = "|this| used uninitialized in " + className + " class constructor";
    else
        expected = "|this| used uninitialized in arrow function in class constructor";
    try {
        f();
        assertEq(0, 1);
    } catch (e) {
        assertEq(e.name, "ReferenceError");
        assertEq(e.message, expected);
    }
}
class TestNormal extends class {} {
    constructor() { this; }
}
checkErr(() => new TestNormal(), "TestNormal");

class TestEval extends class {} {
    constructor() { eval("this") }
}
checkErr(() => new TestEval(), "TestEval");

class TestNestedEval extends class {} {
    constructor() { eval("eval('this')") }
}
checkErr(() => new TestNestedEval(), "TestNestedEval");

checkErr(() => {
    new class extends class {} {
        constructor() { eval("this") }
    }
}, "anonymous");

class TestArrow extends class {} {
    constructor() { (() => this)(); }
}
checkErr(() => new TestArrow(), "");

class TestArrowEval extends class {} {
    constructor() { (() => eval("this"))(); }
}
checkErr(() => new TestArrowEval(), "");

class TestEvalArrow extends class {} {
    constructor() { eval("(() => this)()"); }
}
checkErr(() => new TestEvalArrow(), "");

class TestTypeOf extends class {} {
    constructor() { eval("typeof this"); }
}
checkErr(() => new TestTypeOf(), "TestTypeOf");

if (typeof reportCompare === 'function')
    reportCompare(0, 0);
