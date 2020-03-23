load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("9f65b4024a3bba5864aa373908b00833.js");
var log = "";

function f(x) {
  if (x)
    function g() { return "g0"; }
  else
    function g() { return "g1"; }

  log += g();

  if (x)
    function g() { return "g2"; }
  else {
  }

  log += g();

  if (x) {
  } else
    function g() { return "g3"; }

  log += g();

  if (x)
    function g() { return "g4"; }

  log += g();
}

f(true);
f(false);

try {
  eval(`
    if (1)
      l: function foo() {}
  `);
} catch (e) {
  log += "e";
}

reportCompare(log, "g0g2g2g4g1g1g3g3e");
