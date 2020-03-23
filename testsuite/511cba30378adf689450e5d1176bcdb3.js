load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
var BUGNUMBER = 1185106;
var summary = "Bound names of async functions";

print(BUGNUMBER + ": " + summary);

async function test() {}
assertEq(test.name, "test");

var test2 = (async function test2() {});
assertEq(test2.name, "test2");

var anon = async function() {};
assertEq(anon.name, "anon");

if (typeof Reflect !== "undefined" && Reflect.parse) {
  var tree = Reflect.parse("export default async function() {}", { target: "module" });
  assertEq(tree.body[0].declaration.id.name, "*default*");
}

if (typeof reportCompare === "function")
    reportCompare(true, true);
