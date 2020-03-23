load("201224b0d1c296b45befd2285e95dd42.js");
if (!('gczeal' in this))
    quit();

gczeal(16);
let a = [];
for (let i = 0; i < 1000; i++)
    a.push({x: i});
gc();
