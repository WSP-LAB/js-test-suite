load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that Intl.NumberFormat.prototype functions throw a
 *     TypeError if called on a non-object value or an object that hasn't been
 *     initialized as a NumberFormat.
 * @author Norbert Lindenberg
 */

var functions = {
    "format getter": Object.getOwnPropertyDescriptor(Intl.NumberFormat.prototype, "format").get,
    resolvedOptions: Intl.NumberFormat.prototype.resolvedOptions
};
var invalidTargets = [undefined, null, true, 0, "NumberFormat", [], {}];

Object.getOwnPropertyNames(functions).forEach(function (functionName) {
    var f = functions[functionName];
    invalidTargets.forEach(function (target) {
        var error;
        try {
            f.call(target);
        } catch (e) {
            error = e;
        }
        if (error === undefined) {
            $ERROR("Calling " + functionName + " on " + target + " was not rejected.");
        } else if (error.name !== "TypeError") {
            $ERROR("Calling " + functionName + " on " + target + " was rejected with wrong error " + error.name + ".");
        }
    });
});

