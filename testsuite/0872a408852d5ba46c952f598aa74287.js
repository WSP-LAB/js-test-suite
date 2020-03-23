load("201224b0d1c296b45befd2285e95dd42.js");
if (typeof schedulegc != 'undefined') {
    Function("\
        x = (function() { yield })();\
        new Set(x);\
        schedulegc(1);\
        print( /x/ );\
        for (p in x) {}\
    ")();
}
