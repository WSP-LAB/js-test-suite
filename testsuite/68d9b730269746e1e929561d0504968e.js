load("201224b0d1c296b45befd2285e95dd42.js");
function checkConstruct(thing, buggy) {
    try {
        new thing();
    } catch (e) {}
}
var boundFunctionPrototype = Function.prototype.bind();
checkConstruct(boundFunctionPrototype, true);
var boundBuiltin = Math.sin.bind();
checkConstruct(boundBuiltin, true);
