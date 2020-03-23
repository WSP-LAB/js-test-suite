load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("67475d6f299e80572167f8e325dacbed.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.1.1.1
description: >
  new Map calls `set` for each item on the iterable argument in order.
info: >
  Map ( [ iterable ] )

  ...
  9. Repeat
    ...
    k. Let status be Call(adder, map, «k.[[value]], v.[[value]]»).
  ...
includes: [compareArray.js]
---*/

var mapSet = Map.prototype.set;
var counter = 0;

var iterable = [["foo", 1], ["bar", 2]];
var results = [];
var _this = [];

Map.prototype.set = function(k, v) {
  counter++;
  results.push([k, v]);
  _this.push(this);
  mapSet.call(this, k, v);
};

var map = new Map(iterable);

assert.sameValue(counter, 2, "`Map.prototype.set` called twice.");

assert(compareArray(results[0], iterable[0]));
assert(compareArray(results[1], iterable[1]));
assert.sameValue(_this[0], map);
assert.sameValue(_this[1], map);
