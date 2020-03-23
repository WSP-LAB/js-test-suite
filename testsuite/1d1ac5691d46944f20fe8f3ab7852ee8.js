load("201224b0d1c296b45befd2285e95dd42.js");
// Binary: cache/js-dbg-64-4de07a341aab-linux
// Flags: -m -n -a
//
load("6ec98b17981f95f4363b8bc9869495e2.js");

if (globalPrototypeChainIsMutable())
  this.__proto__ = [];

var msPerDay =   86400000;
for ( var time = 0, year = 1969; year >= 0; year-- ) {
  time -= TimeInYear(year);
}
function DaysInYear( y ) {}
function TimeInYear( y ) {
  return ( DaysInYear(y) * msPerDay );
}
