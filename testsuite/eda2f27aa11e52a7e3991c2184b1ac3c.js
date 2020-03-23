load("201224b0d1c296b45befd2285e95dd42.js");
function test() {
    var arr = new Int8Array(400);
    var idx = "384";
    arr[idx] = 9;
    assertEq(arr[idx], 9);
    idx = "1000";
    arr[idx] = 10;
    assertEq(arr[idx], undefined);
    idx = "-1";
    arr[idx] = 0;
    assertEq(arr[idx], undefined);
}
for (var i=0; i<10; i++)
    test();
