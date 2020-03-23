load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
function bogusConstruct(target) { return 4; }
function bogusConstructUndefined(target) { }

var handler = { construct: bogusConstruct }

function callable() {}

var p = new Proxy(callable, handler);

assertThrowsInstanceOf(function () { new p(); }, TypeError,
                       "[[Construct must throw if an object is not returned.");

handler.construct = bogusConstructUndefined;
assertThrowsInstanceOf(function () { new p(); }, TypeError,
                       "[[Construct must throw if an object is not returned.");

if (typeof reportCompare === "function")
    reportCompare(0,0, "OK");
