load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this))
    quit();

oomTest(() => { let a = [2147483651]; [a[0], a[undefined]].sort(); });
