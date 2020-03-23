load("201224b0d1c296b45befd2285e95dd42.js");
function f(x) {
    delete arguments[0];
    undefined != arguments[0];
    undefined == arguments[0];
    undefined != arguments[0];
    undefined === arguments[0];
}

for(var i=0; i<20; i++) {
    f(1);
}

// Don't assert.

