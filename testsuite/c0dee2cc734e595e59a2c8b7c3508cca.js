load("201224b0d1c296b45befd2285e95dd42.js");
try {
  offThreadCompileScript('Error()', { lineNumber: (4294967295)});
  runOffThreadScript().stack;
} catch (e) {
  // Ignore "Error: Can't use offThreadCompileScript with --no-threads"
}
