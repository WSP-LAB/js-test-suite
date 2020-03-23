load("201224b0d1c296b45befd2285e95dd42.js");
// for-of on an empty collection does not execute the loop body or modify the loop variable.

function test(empty) {
    var x = 'unchanged';
    for (x of empty)
        throw fit;
    assertEq(x, 'unchanged');
}

test([]);
test(new Map);
test(new Set);