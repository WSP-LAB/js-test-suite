load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("a78642394624b473718326d9a37d69a7.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 13.1.1_7
description: >
    Tests that localeCompare produces the same results as
    Intl.Collator.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

var strings = ["d", "O", "od", "oe", "of", "ö", "o\u0308", "X", "y", "Z", "Z.", "𠮷野家", "吉野家", "!A", "A", "b", "C"];
var locales = [undefined, ["de"], ["de-u-co-phonebk"], ["en"], ["ja"], ["sv"]];
var options = [
    undefined,
    {usage: "search"},
    {sensitivity: "base", ignorePunctuation: true}
];

locales.forEach(function (locales) {
    options.forEach(function (options) {
        var referenceCollator = new Intl.Collator(locales, options);
        var referenceSorted = strings.slice().sort(referenceCollator.compare);
        
        strings.sort(function (a, b) { return a.localeCompare(b, locales, options); });
        try {
            testArraysAreSame(referenceSorted, strings);
        } catch (e) {
            e.message += " (Testing with locales " + locales + "; options " + JSON.stringify(options) + ".)";
            throw e;
        }
    });
});
