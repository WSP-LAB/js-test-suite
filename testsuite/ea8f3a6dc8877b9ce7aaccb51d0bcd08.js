load("201224b0d1c296b45befd2285e95dd42.js");
function test1() {
    var src = "switch(x) {\n";
    for (var i=-1; i<4; i++) {
        src += (i >= 0) ? src : "default:\n";
    }
}
test1();
