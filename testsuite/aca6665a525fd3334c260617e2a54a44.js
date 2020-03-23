load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that the options for the date and time components are processed correctly.
 * @author Norbert Lindenberg
 */

$INCLUDE("3bd8fde197e9106a216a7e98b929475a.js");

getDateTimeComponents().forEach(function (component) {
    testOption(Intl.DateTimeFormat, component, "string", getDateTimeComponentValues(component), undefined, {isILD: true});
});

