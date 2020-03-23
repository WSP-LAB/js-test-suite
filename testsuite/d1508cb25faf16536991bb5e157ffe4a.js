load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("1b3dbc1cddb6b5cc8ace501cab6be659.js");
// |reftest| skip-if(!xulRuntime.shell)

// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

//-----------------------------------------------------------------------------
var BUGNUMBER = 822041;
var summary = "Live generators should not cache Gecko Profiler state";

print(BUGNUMBER + ": " + summary);

function gen() {
  var x = yield turnoff();
  yield x;
  yield 'bye';
}

function turnoff() {
  print("Turning off profiler\n");
  disableGeckoProfiling();
  return 'hi';
}

for (var slowAsserts of [ true, false ]) {
  // The slowAssertions setting is not expected to matter
  if (slowAsserts)
    enableGeckoProfilingWithSlowAssertions();
  else
    enableGeckoProfiling();

  g = gen();
  assertEq(g.next(), 'hi');
  assertEq(g.send('gurgitating...'), 'gurgitating...');
  for (var x in g)
    assertEq(x, 'bye');
}

// This is really a crashtest
reportCompare(0, 0, 'ok');
