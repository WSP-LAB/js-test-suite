load("201224b0d1c296b45befd2285e95dd42.js");
// don't crash

function f() {
    var _L1 = arguments;
    for (var i = 0; i < _L1.length; i++) {
        if (typeof _L1[i] == "string")
            _L1[i] = new Object();
    }
    print(arguments[2]);
}

f(1, 2, "3", 4, 5);
f(1, 2, "3", 4, 5);
f(1, 2, "3", 4, 5);
f(1, 2, "3", 4, 5);

