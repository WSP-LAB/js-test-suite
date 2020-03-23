load("201224b0d1c296b45befd2285e95dd42.js");
function f(str) {
   if (typeof str === 'string')
      str = new RegExp(str);
   for (var i = 0; i < 2000; i++)
      str.test('foo');
}
f("abc");

function g(str) {
   if (typeof str === 'string')
      str = new RegExp(str);
   for (var i = 0; i < 2000; i++)
      str.exec('foo');
}
g("abc");
