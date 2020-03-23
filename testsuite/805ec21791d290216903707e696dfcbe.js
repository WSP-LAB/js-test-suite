load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("bb5b1529929999e134af01520c18de68.js");
// |reftest| skip-if(!xulRuntime.shell)
function test() {

// global let is var
assertGlobalDecl("let {x:y} = foo;", letDecl([{ id: objPatt([assignProp("x", ident("y"))]),
                                                init: ident("foo") }]));
// function-global let is let
assertLocalDecl("let {x:y} = foo;", letDecl([{ id: objPatt([assignProp("x", ident("y"))]),
                                               init: ident("foo") }]));
// block-local let is let
assertBlockDecl("let {x:y} = foo;", letDecl([{ id: objPatt([assignProp("x", ident("y"))]),
                                               init: ident("foo") }]));

assertDecl("const {x:y} = foo;", constDecl([{ id: objPatt([assignProp("x", ident("y"))]),
                                              init: ident("foo") }]));

}

runtest(test);
