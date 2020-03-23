load("201224b0d1c296b45befd2285e95dd42.js");


function testEvalThrow(x, y) {
  eval("");
}
for (var i = 0; i < 5; i++)
  testEvalThrow.call("");
