load("201224b0d1c296b45befd2285e95dd42.js");
function doTestInvalidCharCodeAt(input)
{
    var q = "";
    for (var i = 0; i < 10; i++)
       q += input.charCodeAt(i);
    return q;
}
function testInvalidCharCodeAt()
{
    return doTestInvalidCharCodeAt("");
}
assertEq(testInvalidCharCodeAt(), "NaNNaNNaNNaNNaNNaNNaNNaNNaNNaN");
