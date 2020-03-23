load("201224b0d1c296b45befd2285e95dd42.js");

compare = (function() {
  function inner() { return inner.caller; };
  globalInner = inner;
  globalClosure = inner();
  return function(f) { return f === inner; }
})();

assertEq(compare(globalInner), true);
globalClosure();
assertEq(compare(globalInner), false);
