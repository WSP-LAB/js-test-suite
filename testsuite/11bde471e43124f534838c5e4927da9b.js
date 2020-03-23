load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function g() {
}

let a = {
  g: function() {
  }
};

function check(expr) {
  assertThrowsInstanceOf(Function(expr), ReferenceError);
}
function checkDestructuring(expr) {
  assertThrowsInstanceOf(() => Function(expr), SyntaxError);
}

check("g(...[]) = 1");
check("a.g(...[]) = 1");
check("eval(...['1']) = 1");
check("g(...[]) ++");
check("a.g(...[]) ++");
check("eval(...['1']) ++");
checkDestructuring("[g(...[])] = []");
checkDestructuring("[a.g(...[])] = []");
checkDestructuring("[eval(...['1'])] = []");
checkDestructuring("({y: g(...[])} = 1)");
checkDestructuring("({y: a.g(...[])} = 1)");
checkDestructuring("({y: eval(...['1'])} = 1)");
