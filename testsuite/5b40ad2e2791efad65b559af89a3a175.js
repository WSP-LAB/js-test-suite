load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
const t = RegExp.prototype;

const properties = "toSource,toString,compile,exec,test," +
                   "flags,global,ignoreCase,multiline,source,sticky,unicode," +
                   "constructor," +
                   "Symbol(Symbol.match),Symbol(Symbol.replace),Symbol(Symbol.search),Symbol(Symbol.split)";
assertEq(Reflect.ownKeys(t).map(String).toString(), properties);


// Invoking getters on the prototype should not throw
function getter(name) {
    return Object.getOwnPropertyDescriptor(t, name).get.call(t);
}

assertEq(getter("flags"), "");
assertEq(getter("global"), undefined);
assertEq(getter("ignoreCase"), undefined);
assertEq(getter("multiline"), undefined);
assertEq(getter("source"), "(?:)");
assertEq(getter("sticky"), undefined);
assertEq(getter("unicode"), undefined);

assertEq(t.toString(), "/(?:)/");

// The methods don't work with the prototype
assertThrowsInstanceOf(() => t.compile("b", "i"), TypeError);
assertThrowsInstanceOf(() => t.test("x"), TypeError);
assertThrowsInstanceOf(() => t.exec("x"), TypeError);

if (typeof reportCompare === "function")
    reportCompare(0, 0);
