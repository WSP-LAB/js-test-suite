load("201224b0d1c296b45befd2285e95dd42.js");
Object.prototype.prototype = {};
assertEq(Object.getPrototypeOf([].concat()), Array.prototype);
assertEq(Object.getPrototypeOf([].map(x => x)), Array.prototype);
assertEq(Object.getPrototypeOf([].filter(x => x)), Array.prototype);
assertEq(Object.getPrototypeOf([].slice()), Array.prototype);
assertEq(Object.getPrototypeOf([].splice()), Array.prototype);
