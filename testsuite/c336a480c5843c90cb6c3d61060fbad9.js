load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that Intl.NumberFormat.prototype.format
 * converts other types to numbers.
 * @author: Roozbeh Pournader
 */

var formatter = new Intl.NumberFormat();
var testData = [undefined, null, true, '0.6666666', {valueOf: function () { return '0.1234567';}}];
var number;
var i, input, correctResult, result;

for (i in testData) {
    input = testData[i];
    number = +input;
    correctResult = formatter.format(number);
    
    result = formatter.format(input);
    if (result !== correctResult) {
        $ERROR('Intl.NumberFormat does not convert other ' +
            'types to numbers. Input: "'+input+'" Output: "'+result+'" '+
            'Expected output: "'+correctResult+'"');
    }
}

