load("201224b0d1c296b45befd2285e95dd42.js");
function testResumeOp() {
    var a = [1,"2",3,"4",5,"6",7,"8",9,"10",11,"12",13,"14",15,"16"];
    var x = "";
    while (a.length > 0)
        x += a.pop();
    return x;
}
assertEq(testResumeOp(), "16151413121110987654321");
