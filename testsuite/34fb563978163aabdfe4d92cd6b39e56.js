load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| allow-oom

if (!('oomAfterAllocations' in this))
    quit();

var egc = 138;
function SwitchTest(value) {
    switch (value) {
        case 0:
            break
        case new Number:
            result = 8
        case oomAfterAllocations(egc):
    }
}
!(SwitchTest(4) === 4);
!(SwitchTest(true) === 2);
