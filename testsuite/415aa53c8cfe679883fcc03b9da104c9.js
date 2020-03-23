load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

load("1f58bd9e19d142c9fb963f3cdfe41d8a.js");
load("bd6074029bcfcc1e606e7bbf159cf3d8.js");

(function () {
   var opsies   = ["||", "&&"];
   var falsies  = [null, undefined, false, NaN, 0, ""];
   var truthies = [{}, true, 1, 42, 1/0, -1/0, "blah"];
   var boolies  = [falsies, truthies];

   // The for each here should abort tracing, so that this test framework
   // relies only on the interpreter while the orTestHelper and andTestHelper
   //  functions get trace-JITed.
   for each (var op in opsies) {
     for (var i in boolies) {
       for (var j in boolies[i]) {
	 var x = uneval(boolies[i][j]);
	 for (var k in boolies) {
	   for (var l in boolies[k]) {
	     var y = uneval(boolies[k][l]);
	     var prefix = (op == "||") ? "or" : "and";
	     var f = new Function("return " + prefix + "TestHelper(" + x + "," + y + ",10)");
	     var expected = eval(x + op + y) ? 45 : 0;
	     assertEq(f(), expected);
	   }
	 }
       }
     }
   }
 })();
