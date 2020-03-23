load("201224b0d1c296b45befd2285e95dd42.js");
function sieve() {
    for (var i=0; i<100; i++) { }
}
sieve();
gc();

function fib(n) {
    if (n < 2)
        return 1;
    return fib(n-2) + fib(n-1);
}
fib(20);
