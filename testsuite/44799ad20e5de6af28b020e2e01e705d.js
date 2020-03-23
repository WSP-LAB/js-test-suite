load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("99af2c3994932cf7fcec8ec85c6dc330.js");
for (var constructor of anyTypedArrayConstructors) {
    var obj = new constructor(5);

    for (var i = 0; i < obj.length; i++)
        assertEq(i in obj, true);

    for (var v of [20, 300, -1, 5, -10, Math.pow(2, 32) - 1, -Math.pow(2, 32)])
        assertEq(v in obj, false);

    // Don't inherit elements
    obj.__proto__[50] = "hello";
    assertEq(obj.__proto__[50], "hello");
    assertEq(50 in obj, false);

    // Do inherit normal properties
    obj.__proto__.a = "world";
    assertEq(obj.__proto__.a, "world");
    assertEq("a" in obj, true);
}

if (typeof reportCompare === "function")
    reportCompare(true, true);
