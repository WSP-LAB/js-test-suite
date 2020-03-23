load("201224b0d1c296b45befd2285e95dd42.js");
var re = /(pattern)/g;
var input = "patternpatternpattern";
re.exec(input)
RegExp.input = "satturn";
assertEq(RegExp.$1, "pattern");
assertEq(RegExp.lastMatch, "pattern");
assertEq(RegExp.lastParen, "pattern");
assertEq(RegExp.rightContext, "patternpattern");
