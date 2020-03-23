load("201224b0d1c296b45befd2285e95dd42.js");
a = {}
function f(o) {
    for (x in o) {
        print
    }
}
for (var i = 0; i < 3; i++) {
    new f(a)
    a.__proto__ = null
}
