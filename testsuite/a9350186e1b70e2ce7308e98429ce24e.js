load("201224b0d1c296b45befd2285e95dd42.js");
// Test many exports.

load("6f4e4ba393ddba3c50ed7efa7b47592d.js");

const count = 1024;

let s = "";
for (let i = 0; i < count; i++)
    s += "export let e" + i + " = " + (i * i) + ";\n";
let a = moduleRepo['a'] = parseModule(s);

let b = moduleRepo['b'] = parseModule("import * as ns from 'a'");

b.declarationInstantiation();
b.evaluation();

let ns = a.namespace;
for (let i = 0; i < count; i++)
    assertEq(ns["e" + i], i * i);
