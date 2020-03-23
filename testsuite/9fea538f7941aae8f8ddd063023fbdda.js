load("201224b0d1c296b45befd2285e95dd42.js");
// Nested for-of loops can iterate over a Set.

var map = new Set(['a', 'b']);
var log = '';
for (let x of map) {
    log += x + ':'
    for (let y of map)
        log += y;
    log += ';'
};
assertEq(log, 'a:ab;b:ab;');
