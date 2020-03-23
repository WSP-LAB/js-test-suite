load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("99af2c3994932cf7fcec8ec85c6dc330.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/
 */

var gTestfile = 'prototype-constructor-identity.js';
//-----------------------------------------------------------------------------
var BUGNUMBER = 896116;
var summary =
  "Typed array prototypes/constructors should be largely empty, inheriting "
  "most functionality from %TypedArray% and %TypedArray%.prototype";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var TypedArray = Object.getPrototypeOf(Int8Array);

assertEq(TypedArray !== Function.prototype, true,
         "%TypedArray% should be in constructors' [[Prototype]] chains");
assertEq(Object.getPrototypeOf(TypedArray), Function.prototype,
         "%TypedArray%.prototype should inherit from Function.prototype");

assertEq(TypedArray.prototype.constructor, TypedArray,
         "bad %TypedArray%.prototype.constructor");

// Check a few different functions we implement are here, as a sanity check.
var typedArrayProps = Object.getOwnPropertyNames(TypedArray.prototype);
assertEq(typedArrayProps.indexOf("copyWithin") >= 0, true);
assertEq(typedArrayProps.indexOf("subarray") >= 0, true);
assertEq(typedArrayProps.indexOf("set") >= 0, true);

anyTypedArrayConstructors.forEach(function(ctor) {
  assertEq(Object.getPrototypeOf(ctor), TypedArray);

  var proto = ctor.prototype;

  // Inherited functions aren't present.
  var props = Object.getOwnPropertyNames(proto).sort();
  assertEq(props[0], "BYTES_PER_ELEMENT");
  assertEq(props[1], "constructor");
  assertEq(props.length, 2);

  // The inheritance chain should be set up properly.
  assertEq(Object.getPrototypeOf(proto), TypedArray.prototype,
           "prototype should inherit from %TypedArray%.prototype");
});

/******************************************************************************/

reportCompare(true, true);

print("Tests complete");
