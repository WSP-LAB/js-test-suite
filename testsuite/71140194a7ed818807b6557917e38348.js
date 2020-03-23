load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("9f65b4024a3bba5864aa373908b00833.js");
var log = "";
try {
  (function() {
    {
      let y = f();
      function f() { y; }
    }
  })()
} catch (e) {
  log += e instanceof ReferenceError;
}

try {
  function f() {
    switch (1) {
      case 0:
        let x;
      case 1:
        (function() { x; })();
    }
  }
  f();
} catch (e) {
  log += e instanceof ReferenceError;
}

assertEq(log, "truetrue");

if ("reportCompare" in this)
  reportCompare(true, true);
