load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("1b3dbc1cddb6b5cc8ace501cab6be659.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

var watcherCount, setterCount;
function watcher(id, oldval, newval) { watcherCount++; return newval; }
function setter(newval) { setterCount++; }

var p = { set x(v) { setter(v); } };
p.watch('x', watcher);

watcherCount = setterCount = 0;
p.x = 2;
assertEq(setterCount, 1);
assertEq(watcherCount, 1);

var o = Object.defineProperty({}, 'x', { set:setter, enumerable:true, configurable:true });
o.watch('x', watcher);

watcherCount = setterCount = 0;
o.x = 2;
assertEq(setterCount, 1);
assertEq(watcherCount, 1);

reportCompare(0, 0, 'ok');
