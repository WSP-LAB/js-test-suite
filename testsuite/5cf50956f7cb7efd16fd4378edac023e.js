load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var names = Object.getOwnPropertyNames(Object.getOwnPropertyDescriptor({foo: 0}, "foo"));
assertDeepEq(names, ["value", "writable", "enumerable", "configurable"]);

names = Object.getOwnPropertyNames(Object.getOwnPropertyDescriptor({get foo(){}}, "foo"));
assertDeepEq(names, ["get", "set", "enumerable", "configurable"]);

var proxy = new Proxy({}, {
    defineProperty(target, key, desc) {
        var names = Object.getOwnPropertyNames(desc);
        assertDeepEq(names, ["set", "configurable"]);
        return true;
    }
});

Object.defineProperty(proxy, "foo", {configurable: true, set: function() {}});

reportCompare(true, true);
