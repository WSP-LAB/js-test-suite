load("201224b0d1c296b45befd2285e95dd42.js");
load("c87c456240a1d89aa2414cb9d34d87f5.js");
var test = "";

// code a function which has both used and unused inner functions.
test  = (function () {
  function f() {
    var x = 3;
    (function() {
      with(obj) {
        (function() {
          assertEq(x, 2);
        })();
      }
    })();
  };

  return "var obj = { x : 2 };" + f.toSource() + "; f()";
})();
evalWithCache(test, { assertEqBytecode: true, assertEqResult : true });
