load("201224b0d1c296b45befd2285e95dd42.js");
function f(a) {
   function g() {
       yield function () { return a; };
   }
   if (a == 8)
       return g();
   a = 3;
}
var x;
for (var i = 0; i < 9; i++)
   x = f(i);
x.next()();  // ReferenceError: a is not defined.
