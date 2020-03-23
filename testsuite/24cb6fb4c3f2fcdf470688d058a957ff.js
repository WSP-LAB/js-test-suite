load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("e7298b87458610fb43224d2d0185d930.js");
function gen() {
    yield 3;
}

var g = gen();
assertEq(g.close(), undefined);

var h = gen();
assertEq(h.next(), 3);
var caught = false;
try {
    h.next();
} catch (e) {
    caught = true;
    assertEq(e instanceof StopIteration, true);
}
assertEq(caught, true);
assertEq(h.close(), undefined);

reportCompare();
