load("201224b0d1c296b45befd2285e95dd42.js");
function testForInLoopChangeIteratorType() {
    for(y in [0,1,2]) y = NaN;
    (function(){
        [].__proto__.u = void 0;
        for (let y in [5,6,7,8])
            y = NaN;
        delete [].__proto__.u;
    })()
    return "ok";
}
assertEq(testForInLoopChangeIteratorType(), "ok");
