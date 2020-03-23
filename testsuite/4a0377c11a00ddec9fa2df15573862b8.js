load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this) || helperThreadCount() === 0)
    quit();

oomTest(() => {
    offThreadCompileScript(`
        function f(x) {
            class of extends ("ABCDEFGHIJK") {
                test() { return true; };
                static get() {};
                static get() {};
            }
            return 1 + f(x - 1);
        }
        return g("try{}catch(e){}", n);
        `);
    runOffThreadScript();
});
