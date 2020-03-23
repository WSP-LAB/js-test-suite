load("201224b0d1c296b45befd2285e95dd42.js");
// Test various ways of changing the behavior of |typedArray.length|.

function addLengthProperty() {
  var x = new Uint16Array();
  Object.defineProperty(x, "length", {value:1});
  for (var i = 0; i < 5; i++)
    assertEq(x.length, 1);
}
addLengthProperty();

function changePrototype() {
  var x = new Uint16Array();
  x.__proto__ = [0];
  for (var i = 0; i < 5; i++)
    assertEq(x.length, 1);
}
changePrototype();

function redefineLengthProperty() {
  var x = new Uint16Array();
  Object.defineProperty(Uint16Array.prototype, "length", {value:1});
  for (var i = 0; i < 5; i++)
    assertEq(x.length, 1);
}
redefineLengthProperty();
