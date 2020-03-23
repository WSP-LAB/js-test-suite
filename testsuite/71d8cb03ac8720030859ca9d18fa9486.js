load("201224b0d1c296b45befd2285e95dd42.js");
function testMoreClosures() {
    var f = {}, max = 3;

    var hello = function(n) {
        function howdy() { return n * n }
        f.test = howdy;
    };

    for (var i = 0; i <= max; i++)
        hello(i);

    return f.test();
}
assertEq(testMoreClosures(), 9);
