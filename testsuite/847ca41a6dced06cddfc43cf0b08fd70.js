load("201224b0d1c296b45befd2285e95dd42.js");
if (!('gczeal' in this))
    quit();
var lfGlobal = newGlobal();
lfGlobal.evaluate(`
    for (var i = 0; i < 600; i++)
        eval('function f' + i + '() {}');
`);
var lfGlobal = newGlobal();
lfGlobal.evaluate(`
    if (!('gczeal' in this))
        quit();
    var dbg = new Debugger();
    gczeal(9, 10);
    dbg.findScripts({});
`);
