load("201224b0d1c296b45befd2285e95dd42.js");
a = "".__proto__
b = uneval().__proto__
for (var i = 0; i < 2; i++) {
    a.__defineSetter__("valueOf", function() {})
    a + ""
    delete b.valueOf
}
