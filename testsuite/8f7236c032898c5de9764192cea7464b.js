load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

(function() {
 var x;
 eval("for (x in (gc)()) for each(e in [0]) { print }")
})()
