load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError
var s = "12345";
for(var i=0; i<7; i++) {
    print(s[i].length);
}

