load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
// Our __noSuchMethod__ handling should only be called when |this| is an object.

var x = "";
// Reached from interpreter's JSOP_CALLPROP, and js::mjit::ic::CallProp.
try { x.i(); } catch (ex) { }

// Reached from interpreter's JSOP_CALLELEM, and js::mjit::stubs::CallElem.
try { x[x](); } catch (ex) { }

// Reached from js::mjit::stubs::CallProp:
try { true.i(); } catch(ex) { }

reportCompare(true,true);
