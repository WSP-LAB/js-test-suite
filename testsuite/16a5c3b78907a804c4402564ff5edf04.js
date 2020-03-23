load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| --ion-eager;
if (typeof Symbol !== "function") quit(0);

var x
(function() {
    x
}());
verifyprebarriers();
x = x * 0
x = Symbol();
gc();
evalcx("x=1", this);
