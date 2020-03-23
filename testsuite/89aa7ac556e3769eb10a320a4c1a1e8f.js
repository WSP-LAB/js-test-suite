load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var BUGNUMBER = 1120169;
var summary = "Implement RegExp.prototype.source";

print(BUGNUMBER + ": " + summary);

assertEq(RegExp.prototype.source, "(?:)");
assertEq(/foo/.source, "foo");
assertEq(/foo/iymg.source, "foo");
assertEq(/\//.source, "\\/");
assertEq(/\n\r/.source, "\\n\\r");
assertEq(/\u2028\u2029/.source, "\\u2028\\u2029");
assertEq(RegExp("").source, "(?:)");
assertEq(RegExp("", "mygi").source, "(?:)");
assertEq(RegExp("/").source, "\\/");
assertEq(RegExp("\n\r").source, "\\n\\r");
assertEq(RegExp("\u2028\u2029").source, "\\u2028\\u2029");

assertThrowsInstanceOf(() => genericSource(), TypeError);
assertThrowsInstanceOf(() => genericSource(1), TypeError);
assertThrowsInstanceOf(() => genericSource(""), TypeError);
assertThrowsInstanceOf(() => genericSource({}), TypeError);
assertThrowsInstanceOf(() => genericSource(new Proxy(/foo/, {get(){ return true; }})), TypeError);

function genericSource(obj) {
    return Object.getOwnPropertyDescriptor(RegExp.prototype, "source").get.call(obj);
}

if (typeof reportCompare === "function")
    reportCompare(true, true);
