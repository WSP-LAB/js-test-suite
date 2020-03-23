load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| allow-oom

if (!('oomAtAllocation' in this))
    quit();

for (let a of [
        null, function() {}, function() {}, null, function() {}, function() {},
        function() {}, null, null, null, null, null, null, null, null,
        function() {}, null, null, null, function() {}
    ]) {
    oomAtAllocation(5);
}
