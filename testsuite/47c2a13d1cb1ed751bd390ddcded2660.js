load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var BUGNUMBER = 883377;
var summary = "Anonymous function name should be set based on for-in initializer";

print(BUGNUMBER + ": " + summary);

var exprs = [
    ["function() {}", false],
    ["function named() {}", true],
    ["function*() {}", false],
    ["function* named() {}", true],
    ["async function() {}", false],
    ["async function named() {}", true],
    ["() => {}", false],
    ["async () => {}", false],
    ["class {}", false],
    ["class named {}", true],
];

function testForInHead(expr, named) {
    eval(`
    for (var forInHead = ${expr} in {}) {
    }
    `);
    assertEq(forInHead.name, named ? "named" : "forInHead");
}
for (var [expr, named] of exprs) {
    testForInHead(expr, named);
}

if (typeof reportCompare === "function")
    reportCompare(0, 0);
