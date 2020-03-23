load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

N = 0;
function n() {}
s = n;
function f(foo) {
    gc();
    try {
        (Function(foo))();
    } catch(r) {}
    delete this.Math;
}
function g() {}
var c;
function y() {}
t = b = eval;
f("\
  __defineGetter__(\"\",\
    function(p){\
      for(var s in this) {}\
    }\
  )[\"\"]\
");
f("\
  do;\
  while(([\
    \"\" for each(z in this)\
  ])&0)\
");
f();
