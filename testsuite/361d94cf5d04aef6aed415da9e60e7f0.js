load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError 
// don't assert

print(this.watch("x",
function() {
  Object.defineProperty(this, "x", ({
    get: (Int8Array)
  }))
}))(x = /x/)
