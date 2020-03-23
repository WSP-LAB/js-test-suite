load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| --ion-pgo=on

evaluate(`
    var i = 0;
    while (!inIon())
        a = [] ? i: () => 5;
`);
