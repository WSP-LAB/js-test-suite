load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    var a = [], i, N = 10;
    for (i = 0; i < N; i++)
        a[i] = {m: i};
    for (i = 0; i < N; i++)
        a[i].m = function() { return 0; };
    assertEq(a[N - 2].m === a[N - 1].m, false);
}
f();
f();
