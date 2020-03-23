load("201224b0d1c296b45befd2285e95dd42.js");
function reportCompare (expected, actual) {
  if (expected != actual) {}
}
function exitFunc (funcName) {
  return reportCompare(undefined, '');
}
reportCompare('', '');
exitFunc();
