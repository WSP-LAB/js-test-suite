load("201224b0d1c296b45befd2285e95dd42.js");

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("dc4b20628140c803c89c741458a4c2d0.js");

var reserved = [
  'break',
  'do',
  'in',
  'typeof',
  'case',
  'else',
  'instanceof',
  'var',
  'catch',
  'export',
  'new',
  'void',
  'class',
  'extends',
  'return',
  'while',
  'const',
  'finally',
  'super',
  'with',
  'continue',
  'for',
  'switch',
  'debugger',
  'function',
  'this',
  'delete',
  'import',
  'try',
  'enum',
  'null',
  'true',
  'false'
];
reserved.forEach(ident => {
  assertThrowsInstanceOf(() => new Function('var [...' + ident + '] = []'), SyntaxError);
});

var strictIdentifiers = [
  // XXX: see bug 1032150. Once fixed, please uncomment these values and
  // remove the assertions below
  //'yield',
  //'let',
  'eval',
  'arguments',
  'implements',
  'interface',
  'package',
  'private',
  'protected',
  'public',
  'static'
];
assertThrowsInstanceOf(() => new Function('[...yield] = []'), SyntaxError);
assertThrowsInstanceOf(() => new Function('"use strict"; [...let] = []'), SyntaxError);

strictIdentifiers.forEach(ident =>
  assertThrowsInstanceOf(() =>
    new Function('"use strict"; [...' + ident + '] = []'), SyntaxError));

var globalEval = eval;
strictIdentifiers.forEach(ident => {
  globalEval(ident + ' = null');
  assertEqArray(new Function('input', '[, ...' + ident + '] = input;' +
    'return ' + ident
  )([1, 2, 3]), [2, 3]);
});

