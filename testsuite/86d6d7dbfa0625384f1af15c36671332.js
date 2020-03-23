load("201224b0d1c296b45befd2285e95dd42.js");
// Binary: cache/js-dbg-64-60af58b42567-linux
// Flags:
//
realEval = eval
f = eval("(function(){for(let x in[\
         __defineGetter__(\"\",function(){})\
         ,__defineGetter__(\"\
         functional\
         \",Math.pow)\
         ]){\
         (__defineSetter__(\"\",function(){}))\
         ()\
         }})")
try {
    f()
} catch (r) {
    delete this.eval
    delete this.Math
    eval = realEval
    e = this.toSource
}
f = eval("(function(){(__defineSetter__(\"\
         functional\
         \",(function(){return{t:function(){}}})))()})")
try {
    f()
} catch (r) {
    eval()
}
