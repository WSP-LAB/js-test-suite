load("201224b0d1c296b45befd2285e95dd42.js");
actual = '';
expected = '';

(function () {
    var y;
    (eval("(function () {\
               for (var x = 0; x < 3; ++x) {\
               ''.replace(/a/, (y = 3))\
               }\
           });\
     "))()
})()



assertEq(actual, expected)
