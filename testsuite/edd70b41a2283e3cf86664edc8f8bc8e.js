load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

assertTypeErrorMessage(() => WeakSet.prototype.add.call({}), "add method called on incompatible Object");
assertTypeErrorMessage(() => newGlobal().WeakSet.prototype.add.call({}), "add method called on incompatible Object");
assertTypeErrorMessage(() => WeakSet.prototype.add.call(15), "add method called on incompatible number");

assertTypeErrorMessage(() => Int8Array.prototype.find.call({}), "find method called on incompatible Object");
assertTypeErrorMessage(() => newGlobal().Int8Array.prototype.find.call({}), "find method called on incompatible Object");
assertTypeErrorMessage(() => Int8Array.prototype.find.call(15), "find method called on incompatible number");
