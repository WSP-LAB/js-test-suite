load("201224b0d1c296b45befd2285e95dd42.js");
// Bug 1312488

function test(a) {
    let x = 0;
    for (let i = 0, len = a.length; i < len; i++)
        x += a[i];
    return x;
}
assertEq(test([10.1, 10.2, 10.3, 10.4, 10]), 51);
