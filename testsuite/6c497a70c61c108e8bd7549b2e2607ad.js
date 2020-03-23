load("201224b0d1c296b45befd2285e95dd42.js");
// A map iterator can cope with removing the next entry.

load("e2c808509c360663d6364e14c187fc8f.js");

var map = new Map([['a', 0], ['b', 1], ['c', 2], ['d', 3]]);
var iter = map[Symbol.iterator]();
var log = '';
for (let [k, v] of iter) {
    log += k + v;
    if (k === 'b')
        map.delete('c');
}
assertEq(log, 'a0b1d3');
