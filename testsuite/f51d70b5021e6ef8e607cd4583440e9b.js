load("201224b0d1c296b45befd2285e95dd42.js");
var obj = {s: ""};
var name = "s";
for (var i = 0; i <= 13; i++)
    if (i > 8)
        obj[name]--;  // first recording changes obj.s from string to number
assertEq(obj.s, -5);

