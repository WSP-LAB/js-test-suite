load("201224b0d1c296b45befd2285e95dd42.js");
var aVar = 56;
try {
    console.log(aLet);
    let aLet = 56;
    // We cannot add `caught` variable on the toplevel for this testcase.
    // We use assertEq here to catch non-throwing case.
    assertEq(true, false);
} catch (e) {
    assertEq(e.message, "can't access lexical declaration `aLet' before initialization");
}
