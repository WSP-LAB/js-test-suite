load("201224b0d1c296b45befd2285e95dd42.js");
if (typeof gczeal != "function")
    gczeal = function() {}

// don't crash
x = (evalcx('lazy'))
x.watch("", function () {})
gczeal(1)
for (w in x) {}

