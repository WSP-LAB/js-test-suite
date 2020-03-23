load("201224b0d1c296b45befd2285e95dd42.js");
function C() {
  this.x = this[this.y = "foo"]--;
}

// Don't crash.
new C;
