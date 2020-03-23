load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this))
    quit();

oomTest(() => {
    let x = 0;
    try {
        for (let i = 0; i < 100; i++) {
            if (i == 99)
                throw "foo";
            x += i;
        }
    } catch (e) {
        x = 0;
    }
    return x;
});
