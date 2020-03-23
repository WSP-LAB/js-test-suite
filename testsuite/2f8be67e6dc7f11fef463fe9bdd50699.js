load("201224b0d1c296b45befd2285e95dd42.js");
a = [];
for (var i = 0; i < 1000; i++) {
  a[i] = i;
}
function foo(x) {
  for (var i in x) {
  }
}
if (typeof schedulegc != "undefined")
  schedulegc(100);
foo(a);
