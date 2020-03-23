load("201224b0d1c296b45befd2285e95dd42.js");
var obj = {count: 24};
var key = 'count';

for (var i = 0; i < 1024; ++i) {
    var result = obj[key];
    if (i === 2)
        obj.newAttr = 42;
}

/* Perform getelem across shape change. */
