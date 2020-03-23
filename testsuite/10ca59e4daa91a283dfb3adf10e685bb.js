load("201224b0d1c296b45befd2285e95dd42.js");
function gen()
{
    var local = new Date();
    yield 1;
    local = null;
    gc();
    gcslice(0); // Start IGC, but don't mark anything.
    yield 2;
}

var g = gen();
g.next();
g.next();
gcslice();
