load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2011-2012 Norbert Lindenberg. All rights reserved.
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that the digits are determined correctly when specifying significant digits.
 * @author Norbert Lindenberg
 */

$INCLUDE("3bd8fde197e9106a216a7e98b929475a.js");

var locales = [
    new Intl.NumberFormat().resolvedOptions().locale,
    "ar", "de", "th", "ja"
];
var numberingSystems = [
    "arab",
    "latn",
    "thai",
    "hanidec"
];
var testData = {
    "0": "0.00",
    "-0": "0.00",
    "123": "123",
    "-123": "-123",
    "12345": "12345",
    "-12345": "-12345",
    "123.45": "123.45",
    "-123.45": "-123.45",
    "123.44499": "123.44",
    "-123.44499": "-123.44",
    "123.44500": "123.45",
    "-123.44500": "-123.45",
    "123.44501": "123.45",
    "-123.44501": "-123.45",
    "0.001234": "0.001234",
    "-0.001234": "-0.001234",
    "0.00000000123": "0.00000000123",
    "-0.00000000123": "-0.00000000123",
    "0.00000000000000000000000000000123": "0.00000000000000000000000000000123",
    "-0.00000000000000000000000000000123": "-0.00000000000000000000000000000123",
    "1.2": "1.20",
    "-1.2": "-1.20",
    "0.0000000012344501": "0.0000000012345",
    "-0.0000000012344501": "-0.0000000012345",
    "123445.01": "123450",
    "-123445.01": "-123450",
    "12344501000000000000000000000000000": "12345000000000000000000000000000000",
    "-12344501000000000000000000000000000": "-12345000000000000000000000000000000"
};

testNumberFormat(locales, numberingSystems,
    {useGrouping: false, minimumSignificantDigits: 3, maximumSignificantDigits: 5},
    testData);

