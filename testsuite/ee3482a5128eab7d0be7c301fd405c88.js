load("201224b0d1c296b45befd2285e95dd42.js");
// Test a big fat asm.js module. First load/compile/cache bullet.js in a
// separate process and then load it again in this process, which should be a
// cache hit.

setCachingEnabled(true);
if (!isAsmJSCompilationAvailable())
    quit();

// Note: if you get some failure in this test, it probably has to do with
// bullet.js and not the nestedShell() call, so try first commenting out
// nestedShell() (and the loadedFromCache assertion) to see if the error
// reproduces.
var load_code = 'load("a4bf681dc67c5e25e98f6039e705c3af.js");';
var code = "setIonCheckGraphCoherency(false); setCachingEnabled(true); " + load_code + " runBullet()";
nestedShell("--js-cache", "--no-js-cache-per-process", "--execute=" + code);
setIonCheckGraphCoherency(false);
load("a4bf681dc67c5e25e98f6039e705c3af.js");
var results = runBullet();
assertEq(results.asmJSValidated, true);
assertEq(results.loadedFromCache, true);
