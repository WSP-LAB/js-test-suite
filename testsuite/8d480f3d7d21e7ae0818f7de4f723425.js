load("201224b0d1c296b45befd2285e95dd42.js");

setJitCompilerOption("ion.warmup.trigger", 30);
function ArrayCallback(state) {
  return this.state = state;
}
ArrayCallback.prototype.isUpperCase = function(v, index, array) {
    return this.state ? true : (v == v.toUpperCase());
};
strings = ['hello', 'Array', 'WORLD'];
obj = new ArrayCallback(false);
strings.filter(obj.isUpperCase, obj)
obj = new ArrayCallback(true);
strings.filter(obj.isUpperCase, obj)
obj.__proto__ = {};
