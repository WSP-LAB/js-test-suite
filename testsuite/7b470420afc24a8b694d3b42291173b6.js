load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("99af2c3994932cf7fcec8ec85c6dc330.js");
var g = newGlobal();

var arr = [1, 2, 3];
for (var constructor of anyTypedArrayConstructors) {
    var tarr = new constructor(arr);
    for (var constructor2 of anyTypedArrayConstructors) {
        var copied = new constructor2(tarr);
        assertEq(copied.buffer.byteLength, arr.length * constructor2.BYTES_PER_ELEMENT);

        g.tarr = tarr;
        copied = g.eval(`new ${constructor2.name}(tarr);`);
        assertEq(copied.buffer.byteLength, arr.length * constructor2.BYTES_PER_ELEMENT);
    }
}

if (typeof reportCompare === "function")
    reportCompare(true, true);
