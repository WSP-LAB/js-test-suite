load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("bb5b1529929999e134af01520c18de68.js");
// |reftest| skip-if(!xulRuntime.shell)
function test() {

// Transform the legacy comprehensions to less legacy comprehensions and test
// them.
function assertFormerlyES6ArrayComp(expr, body, blocks, filter) {
    let match = expr.match(/^\[(.*?) for (.*)\]$/);
    assertEq(match !== null, true);
    let expr2 = "[for " + match[2] + " " + match[1] + "]";
    assertExpr(expr2, compExpr(body, blocks, filter, "modern"));
}

assertFormerlyES6ArrayComp("[ x         for (x of foo)]",
                           ident("x"), [compOfBlock(ident("x"), ident("foo"))], null);
assertFormerlyES6ArrayComp("[ [x,y]     for (x of foo) for (y of bar)]",
                           arrExpr([ident("x"), ident("y")]), [compOfBlock(ident("x"), ident("foo")), compOfBlock(ident("y"), ident("bar"))], null);
assertFormerlyES6ArrayComp("[ [x,y,z] for (x of foo) for (y of bar) for (z of baz)]",
                           arrExpr([ident("x"), ident("y"), ident("z")]),
                           [compOfBlock(ident("x"), ident("foo")), compOfBlock(ident("y"), ident("bar")), compOfBlock(ident("z"), ident("baz"))],
                           null);

assertFormerlyES6ArrayComp("[ x         for (x of foo) if (p)]",
                           ident("x"), [compOfBlock(ident("x"), ident("foo"))], ident("p"));
assertFormerlyES6ArrayComp("[ [x,y]     for (x of foo) for (y of bar) if (p)]",
                           arrExpr([ident("x"), ident("y")]), [compOfBlock(ident("x"), ident("foo")), compOfBlock(ident("y"), ident("bar"))], ident("p"));
assertFormerlyES6ArrayComp("[ [x,y,z] for (x of foo) for (y of bar) for (z of baz) if (p) ]",
                          arrExpr([ident("x"), ident("y"), ident("z")]),
                          [compOfBlock(ident("x"), ident("foo")), compOfBlock(ident("y"), ident("bar")), compOfBlock(ident("z"), ident("baz"))],
                          ident("p"));

// FormerlyES6 comprehensions with multiple ComprehensionIf.

assertExpr("[for (x of foo) x]",
           compExpr(ident("x"), [compOfBlock(ident("x"), ident("foo"))], null, "modern"));
assertExpr("[for (x of foo) if (c1) x]",
           compExpr(ident("x"), [compOfBlock(ident("x"), ident("foo")),
                                 compIf(ident("c1"))], null, "modern"));
assertExpr("[for (x of foo) if (c1) if (c2) x]",
           compExpr(ident("x"), [compOfBlock(ident("x"), ident("foo")),
                                 compIf(ident("c1")), compIf(ident("c2"))], null, "modern"));

assertExpr("[for (x of foo) if (c1) for (y of bar) x]",
           compExpr(ident("x"), [compOfBlock(ident("x"), ident("foo")),
                                 compIf(ident("c1")),
                                 compOfBlock(ident("y"), ident("bar"))], null, "modern"));
assertExpr("[for (x of foo) if (c1) for (y of bar) if (c2) x]",
           compExpr(ident("x"), [compOfBlock(ident("x"), ident("foo")),
                                 compIf(ident("c1")),
                                 compOfBlock(ident("y"), ident("bar")),
                                 compIf(ident("c2"))], null, "modern"));
assertExpr("[for (x of foo) if (c1) if (c2) for (y of bar) if (c3) if (c4) x]",
           compExpr(ident("x"), [compOfBlock(ident("x"), ident("foo")),
                                 compIf(ident("c1")), compIf(ident("c2")),
                                 compOfBlock(ident("y"), ident("bar")),
                                 compIf(ident("c3")), compIf(ident("c4"))], null, "modern"));

assertExpr("[for (x of y) if (false) for (z of w) if (0) x]",
           compExpr(ident("x"), [compOfBlock(ident("x"), ident("y")),
                                 compIf(lit(false)),
                                 compOfBlock(ident("z"), ident("w")),
                                 compIf(lit(0))], null, "modern"));

}

runtest(test);
