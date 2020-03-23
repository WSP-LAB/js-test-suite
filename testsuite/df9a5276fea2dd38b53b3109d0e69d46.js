load("201224b0d1c296b45befd2285e95dd42.js");
try { }
catch (e) { }

try { throw 2; }
catch (e)
{
  try { throw 3; }
  catch (e2) { }
}
