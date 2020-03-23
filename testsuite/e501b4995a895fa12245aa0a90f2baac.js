load("201224b0d1c296b45befd2285e95dd42.js");
Array.prototype.__defineSetter__(32, function() { print("Hello from arbitrary JS");});
var UBound = 0;
var expect= '';
var expectedvalues = [];
for (var j=0; j < 10; j++) {
  addThis();
  addThis();
  addThis();
  addThis();
}
function addThis() {
  expectedvalues[UBound] = expect;
  UBound++;
}
