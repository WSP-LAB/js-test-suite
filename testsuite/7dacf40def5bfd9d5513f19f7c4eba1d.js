load("201224b0d1c296b45befd2285e95dd42.js");
// Binary: cache/js-dbg-32-b5ae446888f5-linux
// Flags: -m -n -a
//

var Constr = function( ... property)  {};
Constr.prototype = [];
var c = new Constr();
c.push(5);
gc();
function enterFunc() {}
evaluate('enterFunc (c.length);');
