load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("bb5b1529929999e134af01520c18de68.js");
// |reftest| skip-if(!xulRuntime.shell)
// |reftest| skip-if(!xulRuntime.shell)
// bug 963641

Reflect.parse("({ __proto__: null });");
Reflect.parse("var { __proto__: x } = obj;");
Reflect.parse("var [{ __proto__: y }] = obj;");
Reflect.parse("[{ __proto__: y }] = arr;");
Reflect.parse("({ __proto__: y } = obj);");

if (typeof reportCompare === "function")
  reportCompare(true, true);



print("Tests complete");
