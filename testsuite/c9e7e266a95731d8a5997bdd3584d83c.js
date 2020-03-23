load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("2a038e91f6e5f6c7add968f0a7889dbd.js");
load("e4cce4d527d806f2da0b524a99b7d8f6.js");
// |reftest| skip-if(!this.hasOwnProperty("SIMD"))

/*
 * Any copyright is dedicated to the Public Domain.
 * https://creativecommons.org/publicdomain/zero/1.0/
 */

var { MakeComparator } = Helpers;

function testSharedArrayBufferCompat() {
    var TA = new Float32Array(new SharedArrayBuffer(16*4));
    for (var i = 0; i < 16; i++)
        TA[i] = i + 1;

    for (var ta of [
                    new Uint8Array(TA.buffer),
                    new Int8Array(TA.buffer),
                    new Uint16Array(TA.buffer),
                    new Int16Array(TA.buffer),
                    new Uint32Array(TA.buffer),
                    new Int32Array(TA.buffer),
                    new Float32Array(TA.buffer),
                    new Float64Array(TA.buffer)
                   ])
    {
        for (var kind of ['Int32x4', 'Uint32x4', 'Float32x4', 'Float64x2']) {
            var comp = MakeComparator(kind, ta);
            comp.load(0);
            comp.load1(0);
            comp.load2(0);
            comp.load3(0);

            comp.load(3);
            comp.load1(3);
            comp.load2(3);
            comp.load3(3);
        }

        assertThrowsInstanceOf(() => SIMD.Int32x4.load(ta, 1024), RangeError);
        assertThrowsInstanceOf(() => SIMD.Uint32x4.load(ta, 1024), RangeError);
        assertThrowsInstanceOf(() => SIMD.Float32x4.load(ta, 1024), RangeError);
        assertThrowsInstanceOf(() => SIMD.Float64x2.load(ta, 1024), RangeError);
    }
}

testSharedArrayBufferCompat();

if (typeof reportCompare === "function")
    reportCompare(true, true);
