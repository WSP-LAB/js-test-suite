load("201224b0d1c296b45befd2285e95dd42.js");
j = 0;
out1:
for (i = 0; ; j++)
    if (j == 50)
        break out1;
while (++i < 100) {}

assertEq(j, 50);
assertEq(i, 100);
