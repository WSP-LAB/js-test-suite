load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| allow-oom; allow-unhandlable-oom
// 1236476

if (typeof oomTest !== 'function' ||
    typeof offThreadCompileScript !== 'function' ||
    typeof runOffThreadScript !== 'function')
    quit();

oomTest(() => {
    offThreadCompileScript(`
      "use asm";
      return assertEq;
    `);
    runOffThreadScript();
});

