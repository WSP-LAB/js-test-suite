load("201224b0d1c296b45befd2285e95dd42.js");
function loop(actual = 0)  {
  if (function() { actual++ })
  {}
  return actual;
}

assertEq(loop(), 0);
