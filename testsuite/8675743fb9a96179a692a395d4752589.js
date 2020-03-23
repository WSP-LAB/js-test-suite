load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| allow-oom
if (!('oomTest' in this))
    quit();

var dbg = new Debugger;
dbg.onNewGlobalObject = function(global) {
    global.seen = true;
};

oomTest(function() {
    newGlobal({sameZoneAs: this})
});
