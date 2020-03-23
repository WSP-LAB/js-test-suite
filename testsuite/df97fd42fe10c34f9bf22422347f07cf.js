load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/**
 * @description Tests that Intl.DateTimeFormat does not accept Unicode locale
 *     extension keys and values that are not allowed.
 * @author Norbert Lindenberg
 */

$INCLUDE("3bd8fde197e9106a216a7e98b929475a.js");

var locales = ["ja-JP", "zh-Hans-CN", "zh-Hant-TW"];
var input = new Date(Date.parse("1989-11-09T17:57:00Z"));

locales.forEach(function (locale) {
    var defaultDateTimeFormat = new Intl.DateTimeFormat([locale]);
    var defaultOptions = defaultDateTimeFormat.resolvedOptions();
    var defaultOptionsJSON = JSON.stringify(defaultOptions);
    var defaultLocale = defaultOptions.locale;
    var defaultFormatted = defaultDateTimeFormat.format(input);

    var keyValues = {
        "cu": ["USD", "EUR", "JPY", "CNY", "TWD", "invalid"], // DateTimeFormat internally uses NumberFormat
        "nu": ["native", "traditio", "finance", "invalid"],
        "tz": ["usnavajo", "utcw01", "aumel", "uslax", "usnyc", "deber", "invalid"]
    };
    
    Object.getOwnPropertyNames(keyValues).forEach(function (key) {
        keyValues[key].forEach(function (value) {
            var dateTimeFormat = new Intl.DateTimeFormat([locale + "-u-" + key + "-" + value]);
            var options = dateTimeFormat.resolvedOptions();
            if (options.locale !== defaultLocale) {
                $ERROR("Locale " + options.locale + " is affected by key " +
                key + "; value " + value + ".");
            }
            if (JSON.stringify(options) !== defaultOptionsJSON) {
                $ERROR("Resolved options " + JSON.stringify(options) + " are affected by key " +
                key + "; value " + value + ".");
            }
            if (defaultFormatted !== dateTimeFormat.format(input)) {
                $ERROR("Formatted value " + dateTimeFormat.format(input) + " is affected by key " +
                key + "; value " + value + ".");
            }
        });
    });
});

