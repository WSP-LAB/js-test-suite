load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    try {
        let foo = 3;
        for (var i=0; i<50; i++)
            yield i + foo;
    } catch(e) {}
}
var it = f();
for (var i=0; i<40; i++)
    it.next();
it.close();
