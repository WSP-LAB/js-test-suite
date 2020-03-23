load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

function test() {
    for each (var i in []) {}
}
for each (new test().p in [0]) {}
