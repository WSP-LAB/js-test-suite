load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

// Tests taken from:
// http://mathias.html5.org/tests/javascript/string/

/*---
 description: >
     String.prototype.small returns a string of HTML describing a single HTML
     small print element. The element's content is the `this` value of the
     function invocation, coerced to a string.
 es6id: B.2.3.11
 ---*/

assert.sameValue('_'.small(), '<small>_</small>');
assert.sameValue('<'.small(), '<small><</small>');
assert.sameValue(String.prototype.small.call(0x2A), '<small>42</small>');
assert.throws(TypeError, function() {
  String.prototype.small.call(undefined);
});
assert.throws(TypeError, function() {
  String.prototype.small.call(null);
});
