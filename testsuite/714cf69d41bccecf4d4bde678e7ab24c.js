load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("bb5b1529929999e134af01520c18de68.js");
// |reftest| skip

loadRelativeToScript('PatternBuilders.js');

function localSrc(src) {
    return "(function(){ " + src + " })";
}
function localPatt(patt) {
    return program([exprStmt(funExpr(null, [], blockStmt([patt])))]);
}
function blockSrc(src) {
    return "(function(){ { " + src + " } })";
}
function blockPatt(patt) {
    return program([exprStmt(funExpr(null, [], blockStmt([blockStmt([patt])])))]);
}

function assertBlockStmt(src, patt) {
    blockPatt(patt).assert(Reflect.parse(blockSrc(src)));
}

function assertBlockExpr(src, patt) {
    assertBlockStmt(src, exprStmt(patt));
}

function assertBlockDecl(src, patt, builder) {
    blockPatt(patt).assert(Reflect.parse(blockSrc(src), {builder: builder}));
}

function assertLocalStmt(src, patt) {
    localPatt(patt).assert(Reflect.parse(localSrc(src)));
}

function assertLocalExpr(src, patt) {
    assertLocalStmt(src, exprStmt(patt));
}

function assertLocalDecl(src, patt) {
    localPatt(patt).assert(Reflect.parse(localSrc(src)));
}

function assertGlobalStmt(src, patt, builder) {
    program([patt]).assert(Reflect.parse(src, {builder: builder}));
}

function assertStringExpr(src, patt) {
    program([exprStmt(patt)]).assert(Reflect.parse(src));
}

function assertGlobalExpr(src, patt, builder) {
    program([exprStmt(patt)]).assert(Reflect.parse(src, {builder: builder}));
    //assertStmt(src, exprStmt(patt));
}

function assertGlobalDecl(src, patt) {
    program([patt]).assert(Reflect.parse(src));
}

function assertProg(src, patt) {
    program(patt).assert(Reflect.parse(src));
}

function assertStmt(src, patt) {
    assertLocalStmt(src, patt);
    assertGlobalStmt(src, patt);
    assertBlockStmt(src, patt);
}

function assertInFunctionExpr(src, patt) {
    assertLocalExpr(src, patt);
    assertBlockExpr(src, patt);
}

function assertExpr(src, patt) {
    assertLocalExpr(src, patt);
    assertGlobalExpr(src, patt);
    assertBlockExpr(src, patt);
}

function assertDecl(src, patt) {
    assertLocalDecl(src, patt);
    assertGlobalDecl(src, patt);
    assertBlockDecl(src, patt);
}

function assertError(src, errorType) {
    try {
        Reflect.parse(src);
    } catch (expected if expected instanceof errorType) {
        return;
    }
    throw new Error("expected " + errorType.name + " for " + uneval(src));
}
