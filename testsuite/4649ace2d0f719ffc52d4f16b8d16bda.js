load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError
try {
    i
}
catch (x if (function() {})()) {}
catch (d) {
    this.z.z
}
