load("201224b0d1c296b45befd2285e95dd42.js");
// array.keys() returns an iterator over the index of elements
// and array.entries() returns an iterator that yields pairs [index, element].

load("e2c808509c360663d6364e14c187fc8f.js");

var data = [1, 2, 3, "abc"];

var ki = data.keys();
for (var i = 0; i < data.length; i++)
  assertIteratorResult(ki.next(), i, false);
assertIteratorDone(ki, undefined);

var ei = data.entries();
for (var i = 0; i < data.length; i++)
  assertIteratorResult(ei.next(), [i, data[i]], false);
assertIteratorDone(ei, undefined);
