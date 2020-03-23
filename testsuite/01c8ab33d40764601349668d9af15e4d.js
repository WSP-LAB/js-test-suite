load("201224b0d1c296b45befd2285e95dd42.js");
// Test that stringify'ing a saved frame with self-hosted parent frames doesn't
// include the self-hosted parent frame in the output.

const map = (function () {
  return [3].map(n => saveStack()).pop();
}());

assertEq(map.toString().includes("@self-hosted:"), false);
