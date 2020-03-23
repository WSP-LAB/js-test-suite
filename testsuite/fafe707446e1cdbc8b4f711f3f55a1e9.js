load("201224b0d1c296b45befd2285e95dd42.js");

TryToCatch();
TryToCatch();
function Thrower( v ) {
  throw "Caught";
}
function Eval( v ) { 
	SECTION : Thrower(TryToCatch, v, ': 3')
}
function TryToCatch( value, expect ) {
  try {
    Eval( value )
  } catch (e) {  }
}
