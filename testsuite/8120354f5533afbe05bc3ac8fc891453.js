load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this))
    quit();
Object.getOwnPropertyNames(this);
oomTest(function() {
    this[0] = null;
    Object.freeze(this);
});
