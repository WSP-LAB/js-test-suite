load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that an object can't be re-initialized as a DateTimeFormat.
 * @author Norbert Lindenberg
 */

$INCLUDE("3bd8fde197e9106a216a7e98b929475a.js");

testWithIntlConstructors(function (Constructor) {
    var obj, error;
    
    // variant 1: use constructor in a "new" expression
    obj = new Constructor();
    try {
        Intl.DateTimeFormat.call(obj);
    } catch (e) {
        error = e;
    }
    if (error === undefined) {
        $ERROR("Re-initializing object created with \"new\" as DateTimeFormat was not rejected.");
    } else if (error.name !== "TypeError") {
        $ERROR("Re-initializing object created with \"new\" as DateTimeFormat was rejected with wrong error " + error.name + ".");
    }
    
    // variant 2: use constructor as a function
    obj = Constructor.call({});
    error = undefined;
    try {
        Intl.DateTimeFormat.call(obj);
    } catch (e) {
        error = e;
    }
    if (error === undefined) {
        $ERROR("Re-initializing object created with constructor as function as DateTimeFormat was not rejected.");
    } else if (error.name !== "TypeError") {
        $ERROR("Re-initializing object created with constructor as function as DateTimeFormat was rejected with wrong error " + error.name + ".");
    }
    
    return true;
});

