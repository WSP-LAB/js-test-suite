load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("99af2c3994932cf7fcec8ec85c6dc330.js");
// Bug 1291003
if (typeof detachArrayBuffer === "function") {
    for (let constructor of typedArrayConstructors) {
        const elementSize = constructor.BYTES_PER_ELEMENT;

        let targetOffset;
        let buffer = new ArrayBuffer(2 * elementSize);
        let typedArray = new constructor(buffer, 1 * elementSize, 1);
        typedArray.constructor = {
            [Symbol.species]: function(ab, offset, length) {
                targetOffset = offset;
                return new constructor(1);
            }
        };

        let beginIndex = {
            valueOf() {
                detachArrayBuffer(buffer);
                return 0;
            }
        };
        typedArray.subarray(beginIndex);

        assertEq(targetOffset, 1 * elementSize);
    }
}

if (typeof reportCompare === "function")
    reportCompare(true, true);
