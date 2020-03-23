load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this) || helperThreadCount() === 0)
    quit();

oomTest(() => {
    offThreadCompileScript(
        `
        function f(x) {
            if (x == 0)
                return "foobar";
            return 1 + f(x - 1);
        }
        f(5);
        `);
    runOffThreadScript();
});
