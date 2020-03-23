load("201224b0d1c296b45befd2285e95dd42.js");
//|jit-test| error: SyntaxError

(function() {
    x = "arguments";
    f = eval("(function(){return(c for (x in eval('print(arguments[0])')))})");
    for (e in f()) {
        (function() {});
    }
})(3)
