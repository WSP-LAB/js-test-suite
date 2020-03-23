load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("196e1c74d53e52fcbcaac4843b44bb60.js");
// Copyright (C) 2016 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Ensure that the regular expression generally distinguishes between valid
    and invalid forms of the NativeFunction grammar production.
includes: [nativeFunctionMatcher.js]
---*/

if (!NATIVE_FUNCTION_RE.test('function(){[native code]}')) {
  $ERROR('expected string to pass: "function(){[native code]}"');
}

if (!NATIVE_FUNCTION_RE.test('function(){ [native code] }')) {
  $ERROR('expected string to pass: "function(){ [native code] }"');
}

if (!NATIVE_FUNCTION_RE.test('function ( ) { [ native code ] }')) {
  $ERROR('expected string to pass: "function ( ) { [ native code ] }"');
}

if (!NATIVE_FUNCTION_RE.test('function a(){ [native code] }')) {
  $ERROR('expected string to pass: "function a(){ [native code] }"');
}

if (!NATIVE_FUNCTION_RE.test('function a(){ /* } */ [native code] }')) {
  $ERROR('expected string to pass: "function a(){ /* } */ [native code] }"');
}

if (NATIVE_FUNCTION_RE.test('')) {
  $ERROR('expected string to fail: ""');
}

if (NATIVE_FUNCTION_RE.test('native code')) {
  $ERROR('expected string to fail: "native code"');
}

if (NATIVE_FUNCTION_RE.test('function(){}')) {
  $ERROR('expected string to fail: "function(){}"');
}

if (NATIVE_FUNCTION_RE.test('function(){ "native code" }')) {
  $ERROR('expected string to fail: "function(){ "native code" }"');
}

if (NATIVE_FUNCTION_RE.test('function(){ [] native code }')) {
  $ERROR('expected string to fail: "function(){ [] native code }"');
}
