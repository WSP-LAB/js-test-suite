load("201224b0d1c296b45befd2285e95dd42.js");
assertEq("undefined".localeCompare(), 0);
assertEq("a".localeCompare(), "a".localeCompare("undefined"));
assertEq("a".localeCompare("b"), -1);
assertEq("a".localeCompare("b", "en"), -1);
assertEq("b".localeCompare("a"), 1);
assertEq("b".localeCompare("a", "en"), 1);
assertEq("a".localeCompare("a"), 0);
assertEq("a".localeCompare("a", "en"), 0);
