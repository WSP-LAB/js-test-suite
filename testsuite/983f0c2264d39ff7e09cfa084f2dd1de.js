load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each


x = ''.charCodeAt(NaN);
evaluate("for each (var e in [{}, {}, {}, {}, x]) {}");
