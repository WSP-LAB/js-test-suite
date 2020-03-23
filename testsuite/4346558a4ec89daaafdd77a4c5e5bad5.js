load("201224b0d1c296b45befd2285e95dd42.js");
/* Make sure we don't collect the atoms compartment unless every compartment is marked. */

var g = newGlobal();
g.eval("var x = 'some-atom';");

schedulegc(this);
schedulegc('atoms');
gc('zone');
print(g.x);
