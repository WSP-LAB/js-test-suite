load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 Caitlin Potter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*--- 
description: Intrinsic %FunctionPrototype% has poisoned own property "caller"
includes: [propertyHelper.js]
es6id: 8.2.2 S12, 9.2.7
---*/

var FunctionPrototype = Function.prototype;

assert.sameValue(FunctionPrototype.hasOwnProperty('caller'), true, 'The result of %FunctionPrototype%.hasOwnProperty("caller") is true');

var descriptor = Object.getOwnPropertyDescriptor(FunctionPrototype, 'caller');
assert.sameValue(typeof descriptor.get, 'function', '%FunctionPrototype%.caller is an accessor property');
assert.sameValue(typeof descriptor.set, 'function', '%FunctionPrototype%.caller is an accessor property');
assert.sameValue(descriptor.get, descriptor.set, '%FunctionPrototype%.caller getter/setter are both %ThrowTypeError%');

assert.throws(TypeError, function() {
  return FunctionPrototype.caller;	
});

assert.throws(TypeError, function() {
  FunctionPrototype.caller = {};
});

verifyNotEnumerable(FunctionPrototype, 'caller');
verifyConfigurable(FunctionPrototype, 'caller');
