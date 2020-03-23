load("201224b0d1c296b45befd2285e95dd42.js");

(function f() {
  var i;
  var x = 3;
  var o1 = { a: x };
  var o2 = { a: 2 };
  for (i = 0; i < 5; i++)
    o2.a = x;
  Object.preventExtensions({ a: 1 });
  for (i = 0; i < 5; i++)
    ;
})();
