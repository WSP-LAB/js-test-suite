load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:ReferenceError

// Binary: cache/js-dbg-32-47a8311cf0bb-linux
// Flags:
//
x = /x/
Function("Object.defineProperty(x,new AttributeName,({e:true,enumerable:true}))")()
{
  throw (Object.keys)(x, /x/)
}
