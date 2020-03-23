load("201224b0d1c296b45befd2285e95dd42.js");
/* Exercise the path where we want to collect a new compartment in the middle of incremental GC. */

var g1 = newGlobal();
var g2 = newGlobal();

schedulegc(g1);
gcslice(0); // Start IGC, but don't mark anything.
schedulegc(g2);
gcslice(1);
gcslice();
