load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| slow;

// Binary: cache/js-dbg-32-1463dc6308a8-linux
// Flags:
//

var fe="vv";
for (i=0; i<24; i++)
  fe += fe;
var fu=new Function(
  fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe,
  fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe,
  "done"
);
