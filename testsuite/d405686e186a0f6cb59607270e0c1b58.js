load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| slow;

var s = '';
for (var i = 0; i < 70000; i++)
    s += 'function x' + i + '() { x' + i + '(); }\n';
eval("(function() { " + s + " })();");
