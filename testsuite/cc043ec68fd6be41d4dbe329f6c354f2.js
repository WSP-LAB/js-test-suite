load("201224b0d1c296b45befd2285e95dd42.js");
// 'this' is lexically scoped in direct eval code in arrow functions

var obj = {
    f: function (s) {
        return a => eval(s);
    }
};

var g = obj.f("this");
assertEq(g(), obj);

var obj2 = {g: g, fail: true};
assertEq(obj2.g(), obj);
