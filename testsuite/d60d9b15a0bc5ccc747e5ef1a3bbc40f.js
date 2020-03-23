load("201224b0d1c296b45befd2285e95dd42.js");
setJitCompilerOption("baseline.warmup.trigger", 10);
setJitCompilerOption("ion.warmup.trigger", 20);

enableGeckoProfilingWithSlowAssertions();
(function() {
   var n = 50;
   while (n--);
})();
