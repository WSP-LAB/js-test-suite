load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("a78642394624b473718326d9a37d69a7.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
es5id: 11.2.3_b
description: >
    Tests that Intl.NumberFormat does not accept Unicode locale
    extension keys and values that are not allowed.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

var locales = ["ja-JP", "zh-Hans-CN", "zh-Hant-TW"];
var input = 1234567.89;

locales.forEach(function (locale) {
    var defaultNumberFormat = new Intl.NumberFormat([locale]);
    var defaultOptions = defaultNumberFormat.resolvedOptions();
    var defaultOptionsJSON = JSON.stringify(defaultOptions);
    var defaultLocale = defaultOptions.locale;
    var defaultFormatted = defaultNumberFormat.format(input);

    var keyValues = {
        "cu": ["USD", "EUR", "JPY", "CNY", "TWD", "invalid"],
        "nu": ["native", "traditio", "finance", "invalid"]
    };
    
    Object.getOwnPropertyNames(keyValues).forEach(function (key) {
        keyValues[key].forEach(function (value) {
            var numberFormat = new Intl.NumberFormat([locale + "-u-" + key + "-" + value]);
            var options = numberFormat.resolvedOptions();
            if (options.locale !== defaultLocale) {
                $ERROR("Locale " + options.locale + " is affected by key " +
                key + "; value " + value + ".");
            }
            if (JSON.stringify(options) !== defaultOptionsJSON) {
                $ERROR("Resolved options " + JSON.stringify(options) + " are affected by key " +
                key + "; value " + value + ".");
            }
            if (defaultFormatted !== numberFormat.format(input)) {
                $ERROR("Formatted value " + numberFormat.format(input) + " is affected by key " +
                key + "; value " + value + ".");
            }
        });
    });
});
