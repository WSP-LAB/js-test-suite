load("201224b0d1c296b45befd2285e95dd42.js");
try
{
  Array.prototype.splice.call({ get length() { throw 'error'; } });
  throw new Error("should have thrown, didn't");
}
catch (e)
{
  assertEq(e, "error", "wrong error thrown: " + e);
}
