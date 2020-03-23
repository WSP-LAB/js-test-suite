load("201224b0d1c296b45befd2285e95dd42.js");

function boo() {
    return foo.arguments[0];
}

function foo(a,b,c) {
    if (a == 0) {
        a ^= 4;
        return boo();
    }

    return undefined;
}

function inlined() {
    return foo.apply({}, arguments);
}

assertEq(inlined(1,2,3), undefined);
assertEq(inlined(0,1,2), 4);
