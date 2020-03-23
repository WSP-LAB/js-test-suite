load("201224b0d1c296b45befd2285e95dd42.js");
(function () {
    p = function () {
        Set()
    };
    var Set = function () {};
    for (var x = 0; x < 5; x++) {
        Set = function (z) {
            return function () {
                [z]
            }
        } (x)
    }
})()

/*
 * bug 535930, mistakenly generated code to GetUpvar and crashed inside the call.
 * so don't crash.
 */

