load("201224b0d1c296b45befd2285e95dd42.js");
for (var i = 0; i < 10; ++i) {
    var arr = [];
    var s = "abcdefghijklmnop";
    for (var j = 0; j < 5000; ++j) {
        s = "<" + s + ">";
        arr.push(s);
    }
    gc();
    for (var j = 0; j < 5000; ++j) {
        arr[j].search("a");
    }
    gc();
}
