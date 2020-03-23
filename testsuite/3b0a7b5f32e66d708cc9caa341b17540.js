load("201224b0d1c296b45befd2285e95dd42.js");
if (typeof verifyprebarriers != 'function' ||
    typeof offThreadCompileScript != 'function')
    quit();

try {
    // This will fail with --no-threads.
    verifyprebarriers();
    var lfGlobal = newGlobal();
    lfGlobal.offThreadCompileScript(`
      version(185);
    `);
}
catch (e) {
    quit(0);
}

