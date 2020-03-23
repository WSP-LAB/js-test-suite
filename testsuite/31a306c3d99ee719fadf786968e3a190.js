load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
"use strict";

var y = new Proxy({}, {
    getOwnPropertyDescriptor(target, key) {
        if (key === "a") {
            return { configurable: true, get: function(v) {} };
        } else {
            assertEq(key, "b");
            return { configurable: true, writable: false, value: 15 };
        }
    },

    defineProperty() {
        throw "not invoked";
    }
})

// This will invoke [[Set]] on the target, with the proxy as receiver.
assertThrowsInstanceOf(() => y.a = 1, TypeError);
assertThrowsInstanceOf(() => y.b = 2, TypeError);

if (typeof reportCompare === "function")
  reportCompare(true, true);
