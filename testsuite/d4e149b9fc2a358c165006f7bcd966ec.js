load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError
var lfcode = new Array();
lfcode.push("gczeal(4);");
lfcode.push('print(BUGNUMBER + ": " + (W       --    ));');
while (true) {
        var file = lfcode.shift(); if (file == undefined) { break; }
        eval(file);
}

