load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: cache does not have the same size
load("c87c456240a1d89aa2414cb9d34d87f5.js");

var test = (function () {
  function f(x) {
    function ifTrue() {};
    function ifFalse() {};

    if (generation % 2 == 0)
      return ifTrue();
    return ifFalse();
  }
  return f.toSource() + "; f()";
})();
evalWithCache(test, { assertEqBytecode: true, assertEqResult : true });
