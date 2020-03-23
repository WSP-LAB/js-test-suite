load("201224b0d1c296b45befd2285e95dd42.js");
// bug 511575 comment 3
outer:
for (var j = 0; j < 10; j++)
    for (var p in {x:1})
        if (p > "q")
            continue outer;
