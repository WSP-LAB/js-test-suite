load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

for (var j=0;j<2;++j) { (function(o){o.length})(String.prototype); }

for each(let y in [Number, Number]) {
    try {
        "".length()
    } catch(e) {}
}

/* Don't crash. */

