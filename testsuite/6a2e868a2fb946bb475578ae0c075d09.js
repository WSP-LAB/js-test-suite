load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("99af2c3994932cf7fcec8ec85c6dc330.js");
if (typeof Intl !== "object") {
    const localeSep = [,,].toLocaleString();

    const originalNumberToLocaleString = Number.prototype.toLocaleString;

    // Ensure no arguments are passed to the array elements.
    for (let constructor of anyTypedArrayConstructors) {
        Number.prototype.toLocaleString = function() {
            assertEq(arguments.length, 0);
            return "pass";
        };

        // Single element case.
        assertEq(new constructor(1).toLocaleString(), "pass");

        // More than one element.
        assertEq(new constructor(2).toLocaleString(), "pass" + localeSep + "pass");
    }
    Number.prototype.toLocaleString = originalNumberToLocaleString;

    // Ensure no arguments are passed to the array elements even if supplied.
    for (let constructor of anyTypedArrayConstructors) {
        Number.prototype.toLocaleString = function() {
            assertEq(arguments.length, 0);
            return "pass";
        };
        let locales = {};
        let options = {};

        // Single element case.
        assertEq(new constructor(1).toLocaleString(locales, options), "pass");

        // More than one element.
        assertEq(new constructor(2).toLocaleString(locales, options), "pass" + localeSep + "pass");
    }
    Number.prototype.toLocaleString = originalNumberToLocaleString;
}

if (typeof reportCompare === "function")
    reportCompare(true, true);
