load("201224b0d1c296b45befd2285e95dd42.js");

function foo(p) {
    this.f = p;
}
function use(v, a, b) {
    var f = v.f;
    g = f;
    g = a + b;
    if (f != null)
        return;
}

with({}){}

for (var i = 0; i < 2000; i++)
    use(new foo(i % 2 ? {} : null), 1, 2);
use(new foo(null), 2147483548, 1000);
