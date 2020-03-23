load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

var a = ['p', 'q', 'r', 's', 't'];
var o = {p:1, q:2, r:(1), s:4, t:5};
for (var i in o) {
    delete o.p;
}
for each (var i in a)
  assertEq(o.hasOwnProperty(i), i != 'p');
