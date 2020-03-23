load("201224b0d1c296b45befd2285e95dd42.js");
if (typeof oomAtAllocation !== 'function')
    quit();

var lfcode = new Array();
function k(a, f_arg, b, c) {
    for (var i = 0; i < 5; ++i) {
        f_arg(i + a);
    }
}
function t() {
    var x = 2;
    k(50, function(i) {
        x = i;
    }, 100, 200);
    oomAtAllocation(101);
}

try {
    t();
    t();
} catch(e) {
    // ignore the exception
}
