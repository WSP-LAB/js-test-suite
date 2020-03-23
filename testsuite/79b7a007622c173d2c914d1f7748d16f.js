load("201224b0d1c296b45befd2285e95dd42.js");
function testLambdaCtor() {
    var a = [];
    for (var x = 0; x < 9; ++x) {
        var f = function(){};
        a[a.length] = new f;
    }

    assertEq([8].__proto__ !== a[7].__proto__, true);

    // Assert that the last f was properly constructed.
    return a[8].__proto__ === f.prototype;
}
assertEq(testLambdaCtor(), true);
