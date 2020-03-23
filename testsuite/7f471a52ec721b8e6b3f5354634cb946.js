load("201224b0d1c296b45befd2285e95dd42.js");
function toPrinted(value) {
  value = String(value);
}
String = Array;
toPrinted(123);
evaluate('toPrinted("foo");');
