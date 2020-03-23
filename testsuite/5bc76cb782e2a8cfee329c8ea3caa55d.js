load("201224b0d1c296b45befd2285e95dd42.js");
// return from a block function works when there is no other enclosing function

var f = a => {
    if (a)
        return a + 1;
    throw "FAIL";
};

assertEq(f(1), 2);
