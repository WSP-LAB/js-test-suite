load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var absent = {};

var getterValues = [absent, undefined, function(){}];
var setterValues = [absent, undefined, function(){}];
var configurableValues = [absent, true, false];
var enumerableValues = [absent, true, false];

function CreateDescriptor(getter, setter, enumerable, configurable) {
  var descriptor = {};
  if (getter !== absent)
    descriptor.get = getter;
  if (setter !== absent)
    descriptor.set = setter;
  if (configurable !== absent)
    descriptor.configurable = configurable;
  if (enumerable !== absent)
    descriptor.enumerable = enumerable;
  return descriptor;
}

getterValues.forEach(function(getter) {
  setterValues.forEach(function(setter) {
    enumerableValues.forEach(function(enumerable) {
      configurableValues.forEach(function(configurable) {
        var descriptor = CreateDescriptor(getter, setter, enumerable, configurable);
        if (!("get" in descriptor || "set" in descriptor))
          return;

        assertThrowsInstanceOf(function() {
          Object.defineProperty([], "length", descriptor);
        }, TypeError);
      });
    });
  });
});

if (typeof reportCompare === "function")
  reportCompare(0, 0);
