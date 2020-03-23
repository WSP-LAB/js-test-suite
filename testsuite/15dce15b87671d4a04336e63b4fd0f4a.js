load("201224b0d1c296b45befd2285e95dd42.js");
load("00e0aa336e6c8b65ee1f164279cff5fc.js");

[1,2,3,4,5,6,7,8].forEach(
    function(x) {
        // evalInFrame means lightweight gets call obj
        assertEq(evalInFrame(0, "x"), x);
    }
);
