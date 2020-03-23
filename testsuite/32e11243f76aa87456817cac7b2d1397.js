load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("1b3dbc1cddb6b5cc8ace501cab6be659.js");
actual   = 'No Error';
expected = /column-numbers\.js:4:11/;
try {
    throw new Error("test");
}
catch(ex) {
    actual = ex.stack;
    print('Caught exception ' + ex.stack);
}
reportMatch(expected, actual, 'column number present');
