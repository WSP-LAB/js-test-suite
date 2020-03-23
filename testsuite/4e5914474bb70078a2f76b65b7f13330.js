load("201224b0d1c296b45befd2285e95dd42.js");
if (helperThreadCount() == 0)
    quit();

evalInWorker(`
    if (!('gczeal' in this))
        quit();
    gczeal(2);
    for (let i = 0; i < 30; i++) {
        var a = [1, 2, 3];
        a.indexOf(1);
        relazifyFunctions(); }
`);
