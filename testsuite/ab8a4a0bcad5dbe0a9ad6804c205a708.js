load("201224b0d1c296b45befd2285e95dd42.js");
var hits = 0;
for (var j = 0; j < 9; ++j) {
    try {
        (function() {
            (function() {
                eval("x")
                let x
            })()
        })()
    } catch (e) {
      hits++;
    }
}
assertEq(hits, 9);
