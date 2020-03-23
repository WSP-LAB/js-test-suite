load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError

function MyObject( value ) {
  this.value = value;
  value &= value;
}
ForIn_1(new MyObject(true));
function ForIn_1( object) {
  for ( property in object ) {
    object[property] == eval(property) 
  }
}
