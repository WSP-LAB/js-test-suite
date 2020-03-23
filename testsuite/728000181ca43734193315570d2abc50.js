load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("e7298b87458610fb43224d2d0185d930.js");
const K = 20;

var obj;

var g = new function() {
    this.x = "puppies";
    obj = this;
    for (var i = 0; i < K; ++i)
        yield i;
    yield this;
}

var ct = 0;
for (var i in g)
    assertEq((ct < K && ct++ == i) || i == obj, true);
assertEq(i.x, "puppies");

function g2() {
    for (var i=0; i<20; i++)
	yield i;
}
var i = 0;
for (var x of new g2()) {
    assertEq(i, x);
    i++;
}

reportCompare(true,true);
