load("201224b0d1c296b45befd2285e95dd42.js");
load("6ec98b17981f95f4363b8bc9869495e2.js");

c = Number.prototype;
function f(o) {
    if (globalPrototypeChainIsMutable() || o !== Object.prototype)
        o.__proto__ = null
    for (x in o) {}
}
for (i = 0; i < 9; i++) {
    f(c)
    if (globalPrototypeChainIsMutable())
        Object.prototype.__proto__ = c;
    for (x in Object.prototype)
        continue;
    f(Math.__proto__);
}
