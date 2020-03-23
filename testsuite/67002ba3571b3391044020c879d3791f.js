load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    var ret;
    for (var i = 0; i < 10; ++i) {
        {
            let local = 3;
            ret = function() { print(local++); }
        }
    }
    return ret;
}
f()();  // test.js:5: ReferenceError: local is not defined

