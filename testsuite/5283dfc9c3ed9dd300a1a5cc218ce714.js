load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| --ion-gvn=off; error:ReferenceError

(function(x) {
    x = +x
    switch (y) {
        case -1:
            x = 0
    }
})()
