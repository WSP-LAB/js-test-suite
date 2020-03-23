load("201224b0d1c296b45befd2285e95dd42.js");
// There's no assertEq() here;  the test is just that it doesn't crash.
(function () {
    new function () {}
}());
[function () {}]
gc()
for (z = 0; z < 6; ++z) {
    x = []
}
for (w in [0]) {
    x._ = w
}
gc()

