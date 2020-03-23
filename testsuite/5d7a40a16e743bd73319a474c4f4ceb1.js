load("201224b0d1c296b45befd2285e95dd42.js");
function getLength(arr) {
    return arr.length;
}
function f() {
    var arr1 = new Array(10);
    var arr2 = new Array(4294967295);

    for (var i=0; i<10; i++) {
	assertEq(getLength(arr1), 10);
	assertEq(getLength(arr2), 4294967295);
    }
}
f();
