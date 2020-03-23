load("201224b0d1c296b45befd2285e95dd42.js");

function Bext(k) {
    if (k > 0) {
        let i = k + 1;
        if (k == 10) {
            function x () { i = 2; }
	}
        Bext(i - 2);
        Bext(i - 2);
    }
    return 0;
}

function f() {
    Bext(12);
}

f();

/* Don't assert. */

