load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

try {
x = evalcx('lazy');
x.__iterator__ = Object.isFrozen
for each(x in x) {}
} catch (e) {}
