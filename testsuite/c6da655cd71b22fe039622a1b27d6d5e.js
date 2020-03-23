load("201224b0d1c296b45befd2285e95dd42.js");
function t1(v)
{
  if (v)
    return 1;
  return 0;
}

assertEq(t1(objectEmulatingUndefined()), 0);
assertEq(t1(objectEmulatingUndefined()), 0);
assertEq(t1(objectEmulatingUndefined()), 0);

function t2(v)
{
  if (v)
    return 1;
  return 0;
}

assertEq(t2(17), 1);
assertEq(t2(0), 0);
assertEq(t2(-0), 0);
assertEq(t2(objectEmulatingUndefined()), 0);
assertEq(t2(objectEmulatingUndefined()), 0);
assertEq(t2(objectEmulatingUndefined()), 0);
