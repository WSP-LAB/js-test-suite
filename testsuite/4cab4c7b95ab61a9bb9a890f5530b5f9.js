load("201224b0d1c296b45befd2285e95dd42.js");
// Random chosen test: js/src/jit-test/tests/debug/Source-introductionScript-04.js
x = (new Debugger).addDebuggee(newGlobal());
print(x.getOwnPropertyDescriptor('Function').value.proto.script);
// Random chosen test: js/src/jit-test/tests/debug/Memory-takeCensus-03.js
(new Debugger).memory.takeCensus();
