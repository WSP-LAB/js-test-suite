load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this))
    quit();

// Don't run a full oomTest because it takes ages - a few iterations are
// sufficient to trigger the bug.
let i = 0;

oomTest(Function(`
    if (i < 10) {
        i++;
        gczeal(15,1);
        foo;
    }
`));
