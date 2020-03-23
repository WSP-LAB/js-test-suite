load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
var BUGNUMBER = 1185106;
var summary = "async/await syntax in module";

print(BUGNUMBER + ": " + summary);

if (typeof parseModule === "function") {
    parseModule("async function f() { await 3; }");
    parseModule("async function f() { await 3; }");
    assertThrows(() => parseModule("var await = 5;"), SyntaxError);
    assertThrows(() => parseModule("await;"), SyntaxError);
    assertThrows(() => parseModule("await 5;"), SyntaxError);
    assertThrows(() => parseModule("function f() { await 5; }"), SyntaxError);
    assertThrows(() => parseModule("() => { await 5; }"), SyntaxError);
    assertThrows(() => parseModule("export var await;"), SyntaxError);
    assertThrows(() => parseModule("await => 1;"), SyntaxError);
    assertThrows(() => parseModule("async function f() { function g() { await 3; } }"), SyntaxError);

    if (typeof Reflect !== "undefined" && Reflect.parse) {
        assertThrows(() => Reflect.parse("export default async function() { yield; }", { target: "module" }), SyntaxError);
        assertThrows(() => Reflect.parse("export default async function() { yield = 1; }", { target: "module" }), SyntaxError);
    }
}

if (typeof reportCompare === "function")
    reportCompare(true, true);
