load("201224b0d1c296b45befd2285e95dd42.js");

// Make sure that unboxed arrays can be created with all possible inline
// capacities for the different sizes.
var bools = [];
var ints = [];
var doubles = [];
for (var i = 0; i < 150; i++) {
    bools.push(false);
    ints.push(0);
    doubles.push(0.5);
}
for (var i = 0; i < 150; i++) {
    bools = bools.slice(1);
    ints = ints.slice(1);
    doubles = doubles.slice(1);
}
