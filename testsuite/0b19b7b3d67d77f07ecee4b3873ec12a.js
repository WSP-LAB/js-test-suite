load("201224b0d1c296b45befd2285e95dd42.js");
function foo() {
  try {
    return 0;
  } catch (e) {
    try {
      return 1;
    } catch (e) {
    }
  }
}
foo();
