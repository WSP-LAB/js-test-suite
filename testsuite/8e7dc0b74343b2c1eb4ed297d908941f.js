load("201224b0d1c296b45befd2285e95dd42.js");
// set.iterator() is live: entries added during iteration are visited.

var set = new Set([5]);
var log = '';
for (let x of set) {
    log += x + ';';
    if (x > 0)
        set.add(x - 1);
}
assertEq(log, '5;4;3;2;1;0;');
assertEq(set.size, 6);
