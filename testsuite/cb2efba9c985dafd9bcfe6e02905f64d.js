load("201224b0d1c296b45befd2285e95dd42.js");
// Make sure we can recover missing arguments even when it gets assigned to
// another slot.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("00e0aa336e6c8b65ee1f164279cff5fc.js");

function h() {
  evalInFrame(1, "a.push(0)");
}

function f() {
  var a = arguments;
  h();
}

assertThrowsInstanceOf(f, TypeError);

function g() {
  {
    let a = arguments;
    h();
  }
}

assertThrowsInstanceOf(g, TypeError);
