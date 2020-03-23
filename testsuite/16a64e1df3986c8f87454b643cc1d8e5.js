load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:TypeError
function f(){}
gc();
var recursiveFunctions = [{
    text: "(function(){if(a){}g()})"
}];
(function testAllRecursiveFunctions() {
    for (var i = 0; i < recursiveFunctions.length; ++i) {
        var a = recursiveFunctions[i];
        eval(a.text.replace(/@/g, ""))
    }
})();
gcslice(2869);
Function("v={c:[{x:[[]],N:{x:[{}[d]]}}]}=minorgc(true)")()
