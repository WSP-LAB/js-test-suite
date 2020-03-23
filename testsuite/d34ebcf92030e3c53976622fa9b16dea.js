load("201224b0d1c296b45befd2285e95dd42.js");
function MyConstructor(i)
{
  this.i = i;
}
MyConstructor.prototype.toString = function() {return this.i + ""};

function newTest()
{
  var a = [];
  for (var i = 0; i < 10; i++)
    a[i] = new MyConstructor(i);
  return a.join("");
}
assertEq(newTest(), "0123456789");
