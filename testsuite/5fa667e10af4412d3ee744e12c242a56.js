load("201224b0d1c296b45befd2285e95dd42.js");

eval("(function(){({6953421313:0})})")();

function f() {
    var x = {6953421313: 123};
    assertEq(x[6953421313], 123);

    x[6953421313] = "a";
    assertEq(x[6953421313], "a");

    var y = {3.3: true};
    assertEq(y[3.3], true);
}
f();

