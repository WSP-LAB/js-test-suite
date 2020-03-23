load("201224b0d1c296b45befd2285e95dd42.js");
function g() {
    const e = 0;
    return function () {
        switch (7) {
        case e:
        }
    };
}

for (var i = 0; i < 2; i++) {
    let f = g;
    f();
}

// Just test that we don't crash.
