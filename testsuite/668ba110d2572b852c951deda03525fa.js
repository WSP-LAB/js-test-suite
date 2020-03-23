load("201224b0d1c296b45befd2285e95dd42.js");
function bitwiseAnd_inner(bitwiseAndValue) {
  for (var i = 0; i < 60000; i++)
    bitwiseAndValue = bitwiseAndValue & i;
  return bitwiseAndValue;
}
function bitwiseAnd()
{
  return bitwiseAnd_inner(12341234);
}
assertEq(bitwiseAnd(), 0);
