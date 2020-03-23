load("201224b0d1c296b45befd2285e95dd42.js");

/* Make sure we are checking argument types when going through unknown but monomorphic call sites. */

function foo(x) {
  return x + 10;
}

var array = [1,2,3,4,5,6,7,"eight"];

/* Jump through hoops to make 'f' unknown. */
var f = this[eval("'foo'")];

for (var i = 0; i < array.length; i++) {
  var res = f(array[i]);
  if (i != 7)
    assertEq(res, i + 11);
  else
    assertEq(res, "eight10");
}
