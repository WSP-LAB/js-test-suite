load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError
foo(); 
function foo() { 
    this();
}
