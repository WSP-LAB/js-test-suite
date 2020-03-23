load("201224b0d1c296b45befd2285e95dd42.js");
// A map iterator can cope with removing the next entry.

load("e2c808509c360663d6364e14c187fc8f.js");

var set = new Set("abcd");
var iter = set[Symbol.iterator]();
var log = "";
for (let x of iter) {
    log += x;
    if (x === "b")
        set.delete("c");
}
assertEq(log, "abd");
