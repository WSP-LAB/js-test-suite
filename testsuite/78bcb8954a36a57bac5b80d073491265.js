load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */

// getOwnPropertySymbols(proxy) calls the getOwnPropertyNames hook (only).

var symbols = [Symbol(), Symbol("moon"), Symbol.for("sun"), Symbol.iterator];
var hits = 0;

function HandlerProxy() {
    return new Proxy({}, {
        get: function (t, key) {
            if (key !== "ownKeys")
                throw new Error("tried to access handler[" + uneval(key) + "]");
            hits++;
            return t => symbols;
        }
    });
}

function OwnKeysProxy() {
    return new Proxy({}, new HandlerProxy);
}

assertDeepEq(Object.getOwnPropertySymbols(new OwnKeysProxy), symbols);
assertEq(hits, 1);

if (typeof reportCompare === "function")
    reportCompare(0, 0);
