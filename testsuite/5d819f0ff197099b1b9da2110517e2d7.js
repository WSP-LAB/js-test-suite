load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: InternalError
DoWhile( new DoWhileObject( (/[\u0076\u0095]/gm ), 1, 0 ));
function DoWhileObject( value, iterations, endvalue ) {}
function DoWhile( object ) {
  do {
    throw DoWhile(1), "", i < test;
  } while( object.value );
}
