load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var get = [];
var fun = function() {}
var p = new Proxy(fun, {
    get(target, key) {
        get.push(key);
        return target[key];
    }
});

assertEq(new fun instanceof p, true);
assertDeepEq(get, [Symbol.hasInstance, "prototype"]);

reportCompare(true, true);
