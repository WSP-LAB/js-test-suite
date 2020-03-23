load("201224b0d1c296b45befd2285e95dd42.js");
function g() {
    return "global";
}

function q(fun) {
    return fun();
}

function f(x) {
    if (x) {
        function g() {
            return "local";
        }
        var ans = q(function() {
            return g();
        });
    }
    g = null;
    return ans;
}

assertEq(f(true), "local");
