load("201224b0d1c296b45befd2285e95dd42.js");
gczeal(4);
function testInterpreterReentry7() {
    var arr = [0, 1, 2, 3, 4];
    for (var i = (1); i < 5; i++)
        arr[i] = "grue";
}
testInterpreterReentry7();
