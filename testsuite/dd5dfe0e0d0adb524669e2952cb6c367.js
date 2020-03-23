load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    for (var i = 0; i < 12; i++) {
        try {
            eval("");

            void x;
        } catch (e) { }
    }
}

f();

let x;
