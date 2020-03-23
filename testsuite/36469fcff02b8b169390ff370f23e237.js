load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */

var cases = [
    {sym: Symbol(), str: "Symbol()"},
    {sym: Symbol("ok"), str: "Symbol(ok)"},
    {sym: Symbol("\0"), str: "Symbol(\0)"},
    {sym: Symbol.iterator, str: "Symbol(Symbol.iterator)"},
    {sym: Symbol.for("dummies"), str: "Symbol(dummies)"}
];

// Symbol.prototype.toString works on both primitive symbols and Symbol
// objects.
for (var test of cases) {
    assertEq(test.sym.toString(), test.str);
    assertEq(Object(test.sym).toString(), test.str);
}

// Any other value throws.
var nonsymbols = [
    undefined, null, "not-ok", new String("still-not-ok"), {}, []
];
for (var nonsym of nonsymbols)
    assertThrowsInstanceOf(() => Symbol.prototype.toString.call(nonsym), TypeError);

if (typeof reportCompare === "function")
    reportCompare(0, 0);
