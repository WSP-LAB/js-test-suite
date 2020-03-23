load("201224b0d1c296b45befd2285e95dd42.js");
// deoptimize `arguments` in the arrow's closest enclosing non-arrow-function

// non-arrow-function -> arrow function
a = 0;
(function() {
    a = (() => eval("arguments"))();
})(1, 2, 3, 4);
assertEq(a.length, 4);

// non-arrow-function -> arrow function -> arrow function
a = 0;
(function() {
    (() => {
        a = (() => eval("arguments"))();
    })();
})(1, 2, 3, 4);
assertEq(a.length, 4);

// non-arrow-function -> arrow function -> non-arrow-function -> arrow function
a = 0;
(function() {
    (() => {
        (function () {
            a = (() => eval("arguments"))();
        })(1, 2, 3, 4);
    })();
})();
assertEq(a.length, 4);
