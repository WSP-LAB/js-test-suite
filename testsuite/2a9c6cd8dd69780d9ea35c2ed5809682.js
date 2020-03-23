load("201224b0d1c296b45befd2285e95dd42.js");
// Recursion through the get hook works; runaway recursion is checked.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var hits = 0, limit = 10;
var proto = new Proxy({}, {
    get(t, id, r) {
        assertEq(r, obj);
        if (hits++ >= limit)
            return "ding";
        return obj[id];
    }
});

var obj = Object.create(proto);
assertEq(obj.prop, "ding");

hits = 0;
limit = Infinity;
assertThrowsInstanceOf(() => obj.prop, InternalError);
assertEq(hits > 10, true);
