load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("2a038e91f6e5f6c7add968f0a7889dbd.js");
load("e4cce4d527d806f2da0b524a99b7d8f6.js");
// |reftest| skip-if(!this.hasOwnProperty("SIMD"))

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

delete Object.prototype.__proto__;
var Int32x4 = SIMD.Int32x4;
var ar = Int32x4.array(1);
var array = new ar([Int32x4(1, 2, 3, 4)]);

if (typeof reportCompare === "function")
    reportCompare(true, true);
