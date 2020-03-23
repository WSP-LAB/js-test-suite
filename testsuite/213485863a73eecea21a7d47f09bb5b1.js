load("201224b0d1c296b45befd2285e95dd42.js");
// Arrow right-associativity with +=

var s = "";
s += x => x.name;
assertEq(s, "x => x.name");
