load("201224b0d1c296b45befd2285e95dd42.js");
var gen = (function () {yield})();
var t = gen.throw;
try {
    new t;
} catch (e) {
    actual = e;
}
assertEq(actual.name, "TypeError");
assertEq(/is not a constructor/.test(actual.message), true);
