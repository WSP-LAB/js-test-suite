load("201224b0d1c296b45befd2285e95dd42.js");
// Don't assert.
eval("\
    x = RegExp(\"()\", \"y\");\
    x.test();\
    x = {};\
")
gc()
RegExp.$6
