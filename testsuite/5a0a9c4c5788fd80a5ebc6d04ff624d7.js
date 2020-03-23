load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("1b3dbc1cddb6b5cc8ace501cab6be659.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

var log;
function watcher(id, old, newval) { log += 'watcher'; return newval; }
var o = { set x(v) { log += 'setter'; } };
o.watch('x', watcher);
Object.defineProperty(o, 'x', {value: 3, writable: true});
log = '';
o.x = 3;
assertEq(log, 'watcher');

reportCompare(0, 0, 'ok');
