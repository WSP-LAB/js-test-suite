load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this))
    quit();

enableGeckoProfilingWithSlowAssertions();
try {
(function() {
   while (n--) {
   }
})();
} catch(exc1) {}
function arrayProtoOutOfRange() {
    function f(obj) {}
    function test() {
        for (var i = 0; i < 1000; i++)
            var r = f(i % 2 ? a : b);
    }
    test();
}
oomTest(arrayProtoOutOfRange);
