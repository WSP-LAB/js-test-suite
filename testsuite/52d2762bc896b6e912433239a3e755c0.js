load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("41e6217a79cd5540df13626a4eafe149.js");
// With yield*, inner and outer iterators can be invoked separately.

function* g(n) { for (var i=0; i<n; i++) yield i; }
function* delegate(iter) { return yield* iter; }

var inner = g(20);
var outer1 = delegate(inner);
var outer2 = delegate(inner);

assertIteratorNext(outer1, 0);
assertIteratorNext(outer2, 1);
assertIteratorNext(inner, 2);
assertIteratorNext(outer1, 3);
assertIteratorNext(outer2, 4);
assertIteratorNext(inner, 5);

if (typeof reportCompare == "function")
    reportCompare(true, true);
