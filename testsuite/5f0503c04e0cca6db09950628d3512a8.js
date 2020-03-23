load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:ReferenceError

// Binary: cache/js-dbg-32-c08baee44cf4-linux
// Flags:
//
for (c in [0]) {
    {
        let c = this.__defineGetter__("", function(){});
        eval("function w(){}")++
    }
}
