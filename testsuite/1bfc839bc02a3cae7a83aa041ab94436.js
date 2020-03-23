load("e2371540d876710daf38e749390aa2a3.js");
description(
"This test checks the behavior of Arguments object iteration."
);


var arguments = null;
shouldThrow("(function (arguments) { for (var argument of arguments) {}})()")

function test() {
    var i = 0;
    for (arg of arguments) {
        realArg = arguments[i++];
        shouldBeTrue("arg === realArg");
    }
    iteratedArgumentsLength = i;
    actualArgumentsLength = arguments.length;
    shouldBe("actualArgumentsLength", "iteratedArgumentsLength");
}

test();
test("a");
test("a", "b");
test({})

function testAlias() {
    var i = 0;
    var a = arguments;
    for (arg of a) {
        realArg = arguments[i++];
        shouldBeTrue("arg === realArg");
    }
    iteratedArgumentsLength = i;
    actualArgumentsLength = arguments.length;
    shouldBe("actualArgumentsLength", "iteratedArgumentsLength");
}

testAlias();
testAlias("a");
testAlias("a", "b");
testAlias({})


function testStrict() {
    "use strict";
    var i = 0;
    for (arg of arguments) {
        realArg = arguments[i++];
        shouldBeTrue("arg === realArg");
    }
    iteratedArgumentsLength = i;
    actualArgumentsLength = arguments.length;
    shouldBe("actualArgumentsLength", "iteratedArgumentsLength");
}

testStrict();
testStrict("a");
testStrict("a", "b");
testStrict({})


function testReifiedArguments() {
    var i = 0;
    arguments.expando = 1;
    for (arg of arguments) {
        realArg = arguments[i++];
        shouldBeTrue("arg === realArg");
    }
    iteratedArgumentsLength = i;
    actualArgumentsLength = arguments.length;
    shouldBe("actualArgumentsLength", "iteratedArgumentsLength");
}

testReifiedArguments();
testReifiedArguments("a");
testReifiedArguments("a", "b");
testReifiedArguments({})


function testEmptyArrayArguments() {
    arguments = [];
    for (arg of arguments) {
        fail("nothing to iterate");
        return false;
    }

    return true;
}

shouldBeTrue("testEmptyArrayArguments('a')");
shouldBeTrue("testEmptyArrayArguments()");


function testArrayArguments() {
    var i = 0;
    arguments = [1, 2, 3];
    for (arg of arguments) {
        realArg = arguments[i++];
        shouldBeTrue("arg === realArg");
    }
    iteratedArgumentsLength = i;
    actualArgumentsLength = arguments.length;
    shouldBe("actualArgumentsLength", "iteratedArgumentsLength");
}

testArrayArguments();
testArrayArguments("a");
testArrayArguments("a", "b");
testArrayArguments({});

load("cf1a0efae1078faee510f7bda78d4902.js");
