load("201224b0d1c296b45befd2285e95dd42.js");
// Nested uses of AutoEntryMonitor should behave with decorum.

load("de7a245d037cbe0336acdfcbd813dc8e.js");

function Cobb() {
  var twoShot = { toString: function Saito() { return Object; },
                  valueOf: function Fischer() { return "Ariadne"; } };
  assertEq(arraysEqual(entryPoints({ ToString: twoShot }),
                       [ "Saito", "Fischer" ]), true);
}

assertEq(arraysEqual(entryPoints({ function: Cobb }), ["Cobb"]), true);
