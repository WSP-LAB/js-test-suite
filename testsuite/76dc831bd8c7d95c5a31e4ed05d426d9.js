load("201224b0d1c296b45befd2285e95dd42.js");
function ff(parsedTypeName, defaultContext) {
    var context = null;

    if (context === null)
        context = defaultContext;

    if (parsedTypeName.genericArguments !== null) {
        for (var i = 0; i < 0; i++) {}
    }

    var foo = parsedTypeName.type;
    assertEq(typeof context, "object");
    return foo;
}
function test() {
    var parsedTypeName = {genericArguments: null};
    for (var i=0; i<140; i++) {
        if (i > 100)
            parsedTypeName.x = {};
        ff(parsedTypeName, {});
    }
}
test();
