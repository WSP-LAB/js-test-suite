load("201224b0d1c296b45befd2285e95dd42.js");
function tryItOut(code) {
    f = eval("(function(){" + code + "})")
    try {
        f()
    } catch (e) {}
}
tryItOut("x=7");
tryItOut("\"use strict\";for(d in[x=arguments]){}");
tryItOut("for(v in((Object.seal)(x)));x.length=Function")
