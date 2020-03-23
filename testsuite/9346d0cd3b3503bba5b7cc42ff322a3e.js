load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("bb5b1529929999e134af01520c18de68.js");
// |reftest| skip-if(!xulRuntime.shell)
function test() {

// generators

assertDecl("function gen(x) { yield }", genFunDecl("legacy", ident("gen"), [ident("x")], blockStmt([exprStmt(yieldExpr(null))])));
assertExpr("(function(x) { yield })", genFunExpr("legacy", null, [ident("x")], blockStmt([exprStmt(yieldExpr(null))])));
assertDecl("function gen(x) { yield 42 }", genFunDecl("legacy", ident("gen"), [ident("x")], blockStmt([exprStmt(yieldExpr(lit(42)))])));
assertExpr("(function(x) { yield 42 })", genFunExpr("legacy", null, [ident("x")], blockStmt([exprStmt(yieldExpr(lit(42)))])));

assertDecl("function* gen() {}", genFunDecl("es6", ident("gen"), [], blockStmt([])));
assertExpr("(function*() {})", genFunExpr("es6", null, [], blockStmt([])));
assertExpr("(function* gen() {})", genFunExpr("es6", ident("gen"), [], blockStmt([])));

}

runtest(test);
