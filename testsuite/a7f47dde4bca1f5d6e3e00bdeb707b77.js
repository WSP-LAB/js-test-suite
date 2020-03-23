load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: InternalError
// don't assert

gczeal(2)
function x() { 
    [null].some(x)
}
x();

