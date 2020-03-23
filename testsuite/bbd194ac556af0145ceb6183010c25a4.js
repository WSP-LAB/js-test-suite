load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:ReferenceError

try { 
  evaluate("  (function(c) { const x = 1; for (x in null); })();"); 
  var expect = "Passed";
} catch ( e ) {
  result = expect;
}
schedulegc(10);
eval("var o = new MyObject(); var result = 0; for (var o in foo) { result += this[o]; } ") 
function MyObject() {}
