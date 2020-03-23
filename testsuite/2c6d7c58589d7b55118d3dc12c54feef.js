load("201224b0d1c296b45befd2285e95dd42.js");
function g(e) {
    return ("" + e);
}

function blah() {
    do {
        yield;
    } while ({}(p = arguments));
}
rv = blah();
try {
    for (a in rv) ;
} catch (e) {
    print("" + g(e));
}
gc();
