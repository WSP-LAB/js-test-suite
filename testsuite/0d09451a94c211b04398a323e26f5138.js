load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| --ion-gvn=off;

try  {
    var g = newGlobal();
    var dbg = new Debugger(g);
    dbg.onExceptionUnwind = function(m) {
        do {
            m = m.older;
        } while (m != null);
    };
    g.eval("try { throw (function() {});} finally {}");
} catch(e) {

}
