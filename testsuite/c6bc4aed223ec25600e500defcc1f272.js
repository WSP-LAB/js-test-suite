load("201224b0d1c296b45befd2285e95dd42.js");
for (i = 0; i < 10; i++) {
    Object.defineProperty({}, "", {
        get: function() {}
    })
    gc()
}
