load("201224b0d1c296b45befd2285e95dd42.js");
if (typeof gczeal != "function" || helperThreadCount() === 0)
	quit(0);

var lfGlobal = newGlobal();
gczeal(4);
for (lfLocal in this) {}
lfGlobal.offThreadCompileScript(`
  var desc = {
    value: 'bar',
    value: false,
  };
`);
