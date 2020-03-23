load("201224b0d1c296b45befd2285e95dd42.js");
s = newGlobal();
evalcx("\
    try { \
        throw StopIteration;\
    } catch(a) {\
        x = a;\
    } \
    new Proxy(x, {});\
", s);
evalcx("\
    n = x;\
", s);
