load("201224b0d1c296b45befd2285e95dd42.js");
function a()
{
    "use asm";
    function f()
    {
        return (((((-1) >>> (0+0)) | 0) % 10000) >> (0+0)) | 0;
    }
    return f;
}
assertEq(a()(), -1);