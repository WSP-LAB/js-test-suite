load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that compare function is bound to its Intl.Collator.
 * @author Norbert Lindenberg
 */

$INCLUDE("3bd8fde197e9106a216a7e98b929475a.js");

var strings = ["d", "O", "od", "oe", "of", "ö", "o\u0308", "X", "y", "Z", "Z.", "𠮷野家", "吉野家", "!A", "A", "b", "C"];
var locales = [undefined, ["de"], ["de-u-co-phonebk"], ["en"], ["ja"], ["sv"]];
var options = [
    undefined,
    {usage: "search"},
    {sensitivity: "base", ignorePunctuation: true}
];

locales.forEach(function (locales) {
    options.forEach(function (options) {
        var collatorObj = new Intl.Collator(locales, options);
        var compareFunc = collatorObj.compare;
        var referenceSorted = strings.slice();
        referenceSorted.sort(function (a, b) { return collatorObj.compare(a, b); });
        var sorted = strings;
        sorted.sort(compareFunc);
        try {
            testArraysAreSame(referenceSorted, sorted);
        } catch (e) {
            e.message += " (Testing with locales " + locales + "; options " +
                (options ? JSON.stringify(options) : options) + ".)";
            throw e;
        }
    });
});

