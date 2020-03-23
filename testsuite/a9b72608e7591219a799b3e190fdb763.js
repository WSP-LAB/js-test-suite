load("201224b0d1c296b45befd2285e95dd42.js");
// Manually advancing the iterator.

load("e2c808509c360663d6364e14c187fc8f.js");

function* g(n) { for (var i=0; i<n; i++) yield i; }

var inner = g(20);

var n = 0;
for (var x of inner) {
    assertEq(x, n * 2);
    assertIteratorNext(inner, n * 2 + 1);
    n++;
}
assertEq(n, 10);
