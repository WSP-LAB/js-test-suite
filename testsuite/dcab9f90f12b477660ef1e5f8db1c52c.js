load("201224b0d1c296b45befd2285e95dd42.js");
// Binary: cache/js-dbg-64-921e1db5cf11-linux
// Flags: -m -n -a
//

function addThis() {}
function Integer( value ) {
  try {
    checkValue( value )
  } catch (e) {  }
}
function checkValue( value ) {
  if ( addThis() != value || value )
        throw value='foo';
  return value;
}
Integer( 3 );
Integer( NaN );
