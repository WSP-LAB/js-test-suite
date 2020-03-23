load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that Date.prototype.toLocaleString & Co. handle "this time value" correctly.
 * @author Norbert Lindenberg
 */

var functions = {
    toLocaleString: Date.prototype.toLocaleString,
    toLocaleDateString: Date.prototype.toLocaleDateString,
    toLocaleTimeString: Date.prototype.toLocaleTimeString
};
var invalidValues = [undefined, null, 5, "5", false, {valueOf: function () { return 5; }}];

Object.getOwnPropertyNames(functions).forEach(function (p) {
    var f = functions[p];
    invalidValues.forEach(function (value) {
        var error;
        try {
            var result = f.call(value);
        } catch (e) {
            error = e;
        }
        if (error === undefined) {
            $ERROR("Date.prototype." + p + " did not reject this = " + value + ".");
        } else if (error.name !== "TypeError") {
            $ERROR("Date.prototype." + p + " rejected this = " + value + " with wrong error " + error.name + ".");
        }
    });
});

