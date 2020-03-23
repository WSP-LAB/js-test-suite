load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

if (typeof Debugger === 'function') {
    var g = newGlobal();
    var dbg = new Debugger(g);
    dbg.onDebuggerStatement = function (frame) { frame.eval(''); };
    var s = '{ let ';
    for (var i = 0; i < 128; i++)
        s += 'x' + i + ', ';
    s += 'X = 0; debugger; }';
    g.eval(s);
}

reportCompare(0, 0, 'ok');
