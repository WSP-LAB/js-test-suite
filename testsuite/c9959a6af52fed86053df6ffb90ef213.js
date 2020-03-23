load("201224b0d1c296b45befd2285e95dd42.js");
// GC-ing during a for-of loop doesn't crash.

var i = 0;
for (var x of new Set(Object.getOwnPropertyNames(this))) {
    gc();
    if (++i >= 20)
        break;
}
