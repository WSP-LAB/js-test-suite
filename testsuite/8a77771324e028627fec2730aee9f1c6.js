load("201224b0d1c296b45befd2285e95dd42.js");

// String.replace on functions returning hashmap elements.

function first() {
  var arr = {a: "hello", b: "there"};
  var s = 'a|b';
  return s.replace(/[a-z]/g, function(a) { return arr[a]; }, 'g');
}
assertEq(first(), "hello|there");

function second() {
  var arr = {a: "hello", c: "there"};
  var s = 'a|b|c';
  return s.replace(/[a-z]/g, function(a) { return arr[a]; }, 'g');
}
assertEq(second(), "hello|undefined|there");

Object.defineProperty(Object.prototype, "b", {get: function() { return "what"; }});

assertEq(second(), "hello|what|there");

function third() {
  var arr = {a: "hello", b: {toString: function() { arr = {}; return "three"; }}, c: "there"};
  var s = 'a|b|c';
  return s.replace(/[a-z]/g, function(a) { return arr[a]; }, 'g');
}
assertEq(third(), "hello|three|undefined");
