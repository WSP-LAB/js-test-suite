load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:TypeError
Function("Object.defineProperty(this, 'x', { configurable:true, get:function() { delete this['x'] } }); x()")();
