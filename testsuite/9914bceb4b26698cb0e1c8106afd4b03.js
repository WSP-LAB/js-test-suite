load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("99af2c3994932cf7fcec8ec85c6dc330.js");
// |reftest| skip-if(!xulRuntime.shell) -- needs detachArrayBuffer

for (var constructor of typedArrayConstructors) {
    var buf = new constructor();
    detachArrayBuffer(buf.buffer);
    assertThrowsInstanceOf(() => new constructor(buf), TypeError);

    var buffer = new ArrayBuffer();
    detachArrayBuffer(buffer);
    assertThrowsInstanceOf(() => new constructor(buffer), TypeError);
}


if (typeof reportCompare === "function")
    reportCompare(true, true);
