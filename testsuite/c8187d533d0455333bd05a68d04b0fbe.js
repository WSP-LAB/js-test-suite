load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("bb5b1529929999e134af01520c18de68.js");
// |reftest| skip-if(!xulRuntime.shell)
function test() {

// Bug 632027: array holes should reflect as null
assertExpr("[,]=[,]", aExpr("=", arrPatt([null]), arrExpr([null])));

}

runtest(test);
