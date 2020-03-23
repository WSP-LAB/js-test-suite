load("201224b0d1c296b45befd2285e95dd42.js");
gc();

function recur(n)
{
    if (n == 0) {
	gcslice();
	gc();
    } else {
	recur(n-1);
    }
    var obj = new Object();
}

gcslice(1);
recur(10);
