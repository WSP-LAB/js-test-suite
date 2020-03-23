load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2011-2012 Norbert Lindenberg. All rights reserved.
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that missing Unicode extension values default to true for
 *     boolean keys.
 * @author Norbert Lindenberg
 */

var extensions = ["-u-co-phonebk-kn", "-u-kn-co-phonebk"];
extensions.forEach(function (extension) {
    var defaultLocale = new Intl.Collator().resolvedOptions().locale;
    var collator = new Intl.Collator([defaultLocale + extension], {usage: "sort"});
    var locale = collator.resolvedOptions().locale;
    var numeric = collator.resolvedOptions().numeric;
    if (numeric !== undefined) {
        if (numeric !== true) {
            $ERROR("Default value for \"kn\" should be true, but is " + numeric + ".");
        }
        if (locale.indexOf("-kn") !== -1) {
            $ERROR("\"kn\" is returned in locale, but shouldn't be.");
        }
    }
});

