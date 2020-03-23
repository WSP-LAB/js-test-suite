load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

//test no multitrees assert
function testGlobalMultitrees1() {
    (function() { 
      for (var j = 0; j < 4; ++j) {
        for each (e in ['A', 1, 'A']) {
        }
      }
    })();
    return true;
}
assertEq(testGlobalMultitrees1(), true);
