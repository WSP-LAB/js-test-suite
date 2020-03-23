load("201224b0d1c296b45befd2285e95dd42.js");
load("6f4e4ba393ddba3c50ed7efa7b47592d.js");
let a = moduleRepo['a'] = parseModule("export var a = 1; export var b = 2;");
let b = moduleRepo['b'] = parseModule("export var b = 3; export var c = 4;");
let c = moduleRepo['c'] = parseModule("export * from 'a'; export * from 'b';");
let d = moduleRepo['d'] = parseModule("import { a } from 'c'; a;");
d.declarationInstantiation();
d.evaluation();

