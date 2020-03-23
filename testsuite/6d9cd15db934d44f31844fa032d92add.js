load("201224b0d1c296b45befd2285e95dd42.js");
function testFloatArray() {
  var v = new Float32Array(32);

  for (var i = 0; i < v.length; ++i)
    v[i] = i;

  var t = 0;
  for (var i = 0; i < v.length; ++i)
    t += v[i];

  return t;
}

assertEq(testFloatArray(), 496);
