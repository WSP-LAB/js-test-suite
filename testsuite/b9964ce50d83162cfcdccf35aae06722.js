load("201224b0d1c296b45befd2285e95dd42.js");
x = [
    objectEmulatingUndefined(),
    function() {}
];
x.forEach(function() {});
this.x.sort(function() {});
assertEq(x[0] instanceof Function, false);
assertEq(x[1] instanceof Function, true);
