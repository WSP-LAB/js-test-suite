load("201224b0d1c296b45befd2285e95dd42.js");
var callStack = new Array();
function exitFunc (funcName) {
  var lastFunc = callStack.pop();
}
gczeal(4);
var sb = evalcx('');
sb.parent = this;
this.f = function name(outer) {
        return (exitFunc ('test'));
}
evalcx('this.f = parent.f; var s = ""; for (i = 0; i < 10; ++i) s += f(true); s', sb);
