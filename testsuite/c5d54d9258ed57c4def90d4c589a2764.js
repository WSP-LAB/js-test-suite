load("201224b0d1c296b45befd2285e95dd42.js");
function testLambdaInitedVar() {
    var jQuery = function (a, b) {
        return jQuery && jQuery.length;
    }
    return jQuery();
}

assertEq(testLambdaInitedVar(), 2);
