load("201224b0d1c296b45befd2285e95dd42.js");
function m() {
    for (var j = 0; j < 99; ++j) {
        for (var k = 0; k < 99; ++k) {
            try {
                undefined()()
            } catch (e) {}
        }
    }
}
m()
m()
m()
m()
for (var j = 0; j < 99; ++j) {
    for (var k = 0; k < 99; ++k) {
        try {
            gcslice(1)()
        } catch (e) {}
    }
}
