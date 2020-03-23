load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this))
    quit();

enableGeckoProfiling();
oomTest(() => {
    try {
        for (quit of ArrayBuffer);
    } catch (e) {
        switch (1) {
            case 0:
                let x
            case 1:
                (function() { return x; })()
        }
    }
})
