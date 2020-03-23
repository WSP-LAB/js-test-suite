load("201224b0d1c296b45befd2285e95dd42.js");
// Results from another compartment are correctly interpreted by for-of.

load("e2c808509c360663d6364e14c187fc8f.js");

var g = newGlobal();
g.eval(`
    var obj = {};
    obj[Symbol.iterator] = function () { return this; };
    obj.next = function () { return { done: true }; };
`);
for (x of g.obj)
    throw 'FAIL';
