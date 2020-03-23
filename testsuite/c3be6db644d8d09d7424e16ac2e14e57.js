load("201224b0d1c296b45befd2285e95dd42.js");
load("c87c456240a1d89aa2414cb9d34d87f5.js");

var test = (function () {
  function f() {
    var x = function inner() {
	"use asm";
	function g() {}
	return g;
    };
  };
  return f.toSource();
})();

try {
  evalWithCache(test, {});
} catch (x) {
  assertEq(x.message.includes("Asm.js is not supported by XDR"), true);
}
