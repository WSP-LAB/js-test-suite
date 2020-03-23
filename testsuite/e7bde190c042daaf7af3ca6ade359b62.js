load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("afaf31a987248a403eda5d5d509d1351.js");
/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */

// Reflect.getOwnPropertyDescriptor inspects object properties.
assertDeepEq(
    Reflect.getOwnPropertyDescriptor({x: "hello"}, "x"),
    {value: "hello", writable: true, enumerable: true, configurable: true});
assertEq(
    Reflect.getOwnPropertyDescriptor({x: "hello"}, "y"),
    undefined);
assertDeepEq(
    Reflect.getOwnPropertyDescriptor([], "length"),
    {value: 0, writable: true, enumerable: false, configurable: false});

// Reflect.getOwnPropertyDescriptor shares its implementation with
// Object.getOwnPropertyDescriptor. The only difference is how non-object
// targets are handled.
//
// For more Reflect.getOwnPropertyDescriptor tests, see target.js and propertyKeys.js.

reportCompare(0, 0);
