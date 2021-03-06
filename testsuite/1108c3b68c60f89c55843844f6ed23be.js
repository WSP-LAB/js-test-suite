load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("2a038e91f6e5f6c7add968f0a7889dbd.js");
load("e4cce4d527d806f2da0b524a99b7d8f6.js");
// |reftest| skip-if(!this.hasOwnProperty("SIMD"))

/*
 * Any copyright is dedicated to the Public Domain.
 * https://creativecommons.org/publicdomain/zero/1.0/
 */

var { testLoad } = Helpers;

testLoad('Float32x4', new Float32Array(SIZE_32_ARRAY));
testLoad('Float64x2', new Float64Array(SIZE_64_ARRAY));

if (typeof SharedArrayBuffer != "undefined") {
  testLoad('Float32x4', new Float32Array(new SharedArrayBuffer(SIZE_8_ARRAY)));
  testLoad('Float64x2', new Float64Array(new SharedArrayBuffer(SIZE_8_ARRAY)));
}

if (typeof reportCompare === "function")
    reportCompare(true, true);
