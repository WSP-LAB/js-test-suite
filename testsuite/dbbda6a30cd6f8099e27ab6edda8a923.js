load("201224b0d1c296b45befd2285e95dd42.js");
// Modifying an array returned by mapiter.next() does not modify the Map.

load("e2c808509c360663d6364e14c187fc8f.js");

var map = new Map([['a', 1]]);
var res = map[Symbol.iterator]().next();
assertIteratorResult(res, ['a', 1], false);
res.value[0] = 'b';
res.value[1] = 2;
assertIteratorResult(res, ['b', 2], false);
assertEq(map.get('a'), 1);
assertEq(map.has('b'), false);
assertEq(map.size, 1);
