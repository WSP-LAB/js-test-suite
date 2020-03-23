load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("99af2c3994932cf7fcec8ec85c6dc330.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/
 */

var gTestfile = "set-same-buffer-different-source-target-types.js";
//-----------------------------------------------------------------------------
var BUGNUMBER = 896116;
var summary =
  "When setting a typed array from an overlapping typed array of different " +
  "element type, copy the source elements into properly-sized temporary " +
  "memory, and properly copy them into the target without overflow (of " +
  "either source *or* target) when finished";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

// smallest 2**n triggering segfaults in a pre-patch build locally, then
// quadrupled in case the boundary ever changes, or is different in some other
// memory-allocating implementation
var srclen = 65536;

var ta = new Uint8Array(srclen * Float64Array.BYTES_PER_ELEMENT);
var ta2 = new Float64Array(ta.buffer, 0, srclen);
ta.set(ta2);

// This test mostly exists to check for no crash above, but it's worth testing
// for no uninitialized memory (in case of buffer overflow) being copied into
// the array, too.
for (var i = 0, len = ta.length; i < len; i++)
  assertEq(ta[i], 0, "zero-bits double should convert to zero");

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete");
