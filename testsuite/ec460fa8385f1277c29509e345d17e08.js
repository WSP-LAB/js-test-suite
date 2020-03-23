load("201224b0d1c296b45befd2285e95dd42.js");

s = newGlobal()
evalcx("\
    x = new Uint8ClampedArray;\
    x.__proto__ = [];\
", s);
evalcx("\
    x[0]\
", s);
