load("201224b0d1c296b45befd2285e95dd42.js");
function f () {
    var x = new Uint8Array(4);
    empty();
    assertRecoveredOnBailout(x, true);
    var res = inIon();
    bailout();
    return res;
}

function empty() {
}

while(!f());
