load("201224b0d1c296b45befd2285e95dd42.js");
this.watch("x", Object.create)
try {
  (function() {
    this.__defineGetter__("x",
    function() {
      return this
    })
  })()
} catch(e) {}
Object.defineProperty(x, "x", ({
  set: Uint16Array
}))

