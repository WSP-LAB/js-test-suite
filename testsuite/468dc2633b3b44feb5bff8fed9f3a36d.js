load("201224b0d1c296b45befd2285e95dd42.js");

/* Unexpected values out of GETELEM */

function foo() {
  var x = [1,2,3];
  var y;
  var z = x[y];
  y = 10;
  assertEq(z, "twelve");
}
Array.prototype["undefined"] = "twelve";
foo();

function fna() {
  var a = {};
  a[true] = 1;
  assertEq(a["true"], 1);
}
fna();

function fnb() {
  var a = [];
  a[1.1] = 2;
  assertEq(a["1.1"], 2);
}
fnb();
