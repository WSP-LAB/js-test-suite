load("201224b0d1c296b45befd2285e95dd42.js");

var arr = [];
for (var i=0; i<2000; i++)
    arr.push({amount: i > 1900 ? 1987654321 : 1});

function f() {
    for (var i=0; i<arr.length; i++) {
	arr[i].amount += 1987654321;
	assertEq(arr[i].amount, i > 1900 ? 3975308642 : 1987654322);
    }
}
f();
