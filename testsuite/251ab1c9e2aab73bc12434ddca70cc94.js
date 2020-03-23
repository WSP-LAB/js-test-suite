load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
"use strict";

Object.defineProperty(String.prototype, "toString", {
    get() {
        assertEq(typeof this, "string");

        return function() { return typeof this; };
    }
})
assertEq(Object.prototype.toLocaleString.call("test"), "string");

if (typeof reportCompare === "function")
    reportCompare(true, true);
