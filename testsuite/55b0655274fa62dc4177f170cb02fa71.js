load("201224b0d1c296b45befd2285e95dd42.js");
// This just shouldn't crash.
Promise.resolve = () => 42;
Promise.all([1]);
