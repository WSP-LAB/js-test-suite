load("201224b0d1c296b45befd2285e95dd42.js");
for (var i = 0; i < 1e4; i++)
{
  assertEq(typeof new Array(undefined, undefined, 1, 2, 3, 4).sort()[0],
           "number",
           "bad, i: " + i);
}
