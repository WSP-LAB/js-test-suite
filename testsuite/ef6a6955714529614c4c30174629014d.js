load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| --ion-eager
function f(b) {
    var a = arguments;
    if (b)
        f(false);
    else
        g = {
            apply:function(x,y) { "use asm"; function g() {} return g }
        };
    g.apply(null, a);
}
f(true);
