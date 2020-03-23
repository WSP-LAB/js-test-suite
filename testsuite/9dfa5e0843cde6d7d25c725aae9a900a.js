load("201224b0d1c296b45befd2285e95dd42.js");
function reportCompare (expected, actual) {
  return expected != actual;
}

function wrap() {
  reportCompare(true, true);
}

reportCompare('', '');
wrap();
