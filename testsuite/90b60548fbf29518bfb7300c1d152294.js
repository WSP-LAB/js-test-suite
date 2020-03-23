load("201224b0d1c296b45befd2285e95dd42.js");

/* Don't trip bogus assert. */

function foo()
{
  var x;
  while (x = 0) {
    x = 1;
  }
}
foo();
