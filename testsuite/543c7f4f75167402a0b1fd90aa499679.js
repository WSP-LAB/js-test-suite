load("201224b0d1c296b45befd2285e95dd42.js");
// Order of Array.of operations.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var log;

var dstdata = [];
var dst = new Proxy(dstdata, {
    defineProperty: function (t, name, desc) {
        log.push(["def", name, desc.value]);
        return true;
    },
    set: function (t, name, value) {
        log.push(["set", name, value]);
        return true;
    }
});

function Troop() {
    return dst;
}
Troop.of = Array.of;

log = [];
assertEq(Troop.of("monkeys", "baboons", "kangaroos"), dst);
assertDeepEq(log, [
    ["def", "0", "monkeys"],
    ["def", "1", "baboons"],
    ["def", "2", "kangaroos"],
    ["set", "length", 3]
]);

