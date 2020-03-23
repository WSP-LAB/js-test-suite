load("201224b0d1c296b45befd2285e95dd42.js");

function foo(x, y) {
    gc();
    var z = x + y;
    print(z);
}

foo(0x7ffffff0, 100);
