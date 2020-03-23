load("201224b0d1c296b45befd2285e95dd42.js");
function innerTestInnerMissingArgs(a,b,c,d)
{
        if (a) {
        } else {
        }
}

function doTestInnerMissingArgs(k)
{
    for (i = 0; i < 10; i++) {
        innerTestInnerMissingArgs(k);
    }
}

function testInnerMissingArgs()
{
    doTestInnerMissingArgs(1);
    doTestInnerMissingArgs(0);
}

testInnerMissingArgs();
