load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("9f65b4024a3bba5864aa373908b00833.js");
var log = "";

function f() {
  log += g();
  function g() { return "outer-g"; }

  var o = { g: function () { return "with-g"; } };
  with (o) {
    // Annex B.3.3.3 says g should be set on the nearest VariableEnvironment,
    // and so should not change o.g.
    eval(`{
      function g() { return "eval-g"; }
    }`);
  }

  log += g();
  log += o.g();
}

f();

function h() {
  eval(`
    // Should return true, as var bindings introduced by eval are configurable.
    log += (delete q);
    {
      function q() { log += "q"; }
      // Should return false, as lexical bindings introduced by eval are not
      // configurable.
      log += (delete q);
    }
  `);
  return q;
}

h()();

function f2() {
  // Should not throw, just simply not synthesize an Annex B var in the eval
  // because there's an outer const.
  eval("{ function a() {} }");
  const a = 1;
}

function f3() {
  // As above, but for let.
  eval("{ function a() {} }");
  let a;
}

reportCompare(log, "outer-geval-gwith-gtruefalseq");
