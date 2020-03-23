load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError
gczeal(4);
function setprop() {
  var obj = { a:({   } )  };
  var obj2 = { b:-1, a:-1 };
  for (var i = 0; i < 20; (length(resultsY.global0, 42))) {
    obj2.b = obj.a = i;
  }
}
assertEq(setprop(), "19,-1,19");

