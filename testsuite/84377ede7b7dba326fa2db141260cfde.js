load("201224b0d1c296b45befd2285e95dd42.js");
/* Don't assert. */

function f(o) {
  o == 1;
    if (o == 2) {}
}
for (var i = 0; i < 20; i++)
  f(3.14);
