load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:TypeError

delete String.prototype.indexOf;

function enterFunc (funcName) {
    funcName.indexOf();
}
enterFunc(new Array("foo"));
enterFunc(new String("Foo"));
