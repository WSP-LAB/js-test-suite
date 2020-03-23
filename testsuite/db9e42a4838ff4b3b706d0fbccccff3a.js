load("201224b0d1c296b45befd2285e95dd42.js");

function testAddInconvertibleObjectAny() {
  var count = 0;
  function toString() {  }
  try {
    for (var i = 0; i < 100; i++)
        var q = count[count] && this ? testAddInconvertibleObjectAny : ++toString;
  }  catch (e)  {
    var dbg = count(toString);
  }
}
testAddInconvertibleObjectAny();
