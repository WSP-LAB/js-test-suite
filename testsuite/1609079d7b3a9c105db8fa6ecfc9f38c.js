load("201224b0d1c296b45befd2285e95dd42.js");
r = evalcx("/x/", undefined);
s = "";
gc()
Function("\
    s.match(r);\
    schedulegc(__proto__);\
    ({c:schedulegc(2)});\
    s.match(r);\
")()
