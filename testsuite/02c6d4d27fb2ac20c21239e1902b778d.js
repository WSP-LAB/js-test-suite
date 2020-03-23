load("201224b0d1c296b45befd2285e95dd42.js");
function g()
{
  "use asm";
  function f()
  {
    return (0 > (0x80000000 | 0)) | 0;
  }
  return f;
}

assertEq(g()(), (0 > (0x80000000 | 0)) | 0);
