load("201224b0d1c296b45befd2285e95dd42.js");
load("789647b4b1873ad4adf74568147f8449.js");

assertAsmDirectiveFail("'use asm'");
assertAsmDirectiveFail("eval('\"use asm\";');");
assertAsmDirectiveFail("{ eval('\"use asm\";'); }");
assertAsmDirectiveFail("if (Math) { 'use asm'; }");
assertAsmDirectiveFail("function f(){ { 'use asm'; } }");
assertAsmDirectiveFail("function f(){ ; 'use asm'; } }");
assertAsmDirectiveFail("function f(){ 1; 'use asm'; } }");
assertAsmDirectiveFail("function f(){ var x; 'use asm'; } }");
assertAsmDirectiveFail("function f(){ if (Math) { 'use asm'; } }");
assertAsmDirectiveFail("(function(){ eval('\"use asm\";') })()");
assertAsmDirectiveFail("new Function('{\"use asm\";}')");
assertAsmDirectiveFail("new Function('if (Math){\"use asm\";}')");
