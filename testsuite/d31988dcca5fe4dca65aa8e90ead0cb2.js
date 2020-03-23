load("201224b0d1c296b45befd2285e95dd42.js");
let s = "function foo() {\n";
let max = 65536;
for (let i = 0; i < max; i++)
  s += "let ns" + i + " = "+ i +";\n";
s += "};";
eval(s);
