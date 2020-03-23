load("201224b0d1c296b45befd2285e95dd42.js");
// Test importing a namespace many times.

load("6f4e4ba393ddba3c50ed7efa7b47592d.js");

const count = 1024;

let a = moduleRepo['a'] = parseModule("export let a = 1;");

let s = "";
for (let i = 0; i < count; i++) {
    s += "import * as ns" + i + " from 'a';\n";
    s += "assertEq(ns" + i + ".a, 1);\n";
}
let b = moduleRepo['b'] = parseModule(s);

b.declarationInstantiation();
b.evaluation();
