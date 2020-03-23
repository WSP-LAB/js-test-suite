load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this))
    quit();

print = function() {}
function k() { return dissrc(print); }
function j() { return k(); }
function h() { return j(); }
function f() { return h(); }
f();
oomTest(() => f())
