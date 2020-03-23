load("201224b0d1c296b45befd2285e95dd42.js");
h = Function("a", "b", "c", "...rest", "return rest.toString();");
assertEq(h.length, 3);
assertEq(h(1, 2, 3, 4, 5), "4,5");
