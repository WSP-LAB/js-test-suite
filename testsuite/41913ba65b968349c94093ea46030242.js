load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
assertEq(RegExp(/foo/my).flags, "my");
assertEq(RegExp(/foo/, "gi").flags, "gi");
assertEq(RegExp(/foo/my, "gi").flags, "gi");
assertEq(RegExp(/foo/my, "").flags, "");
assertEq(RegExp(/foo/my, undefined).flags, "my");
assertThrowsInstanceOf(() => RegExp(/foo/my, null), SyntaxError);
assertThrowsInstanceOf(() => RegExp(/foo/my, "foo"), SyntaxError);

assertEq(/a/.compile("b", "gi").flags, "gi");
assertEq(/a/.compile(/b/my).flags, "my");
assertEq(/a/.compile(/b/my, undefined).flags, "my");
assertThrowsInstanceOf(() => /a/.compile(/b/my, "gi"), TypeError);
assertThrowsInstanceOf(() => /a/.compile(/b/my, ""), TypeError);
assertThrowsInstanceOf(() => /a/.compile(/b/my, null), TypeError);
assertThrowsInstanceOf(() => /a/.compile(/b/my, "foo"), TypeError);

if (typeof reportCompare === "function")
    reportCompare(true, true);
