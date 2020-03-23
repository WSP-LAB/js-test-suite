load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this))
    quit();

var x = ``.split();
oomTest(function() {
    var lfGlobal = newGlobal();
    for (lfLocal in this) {
        if (!(lfLocal in lfGlobal)) {
                lfGlobal[lfLocal] = this[lfLocal];
        }
    }
});

