load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("1b3dbc1cddb6b5cc8ace501cab6be659.js");
// |reftest| skip-if(!xulRuntime.shell)
// -*- Mode: C++; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 4 -*-
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

function check(v) {
    try {
        serialize(v);
    } catch (exc) {
        return;
    }
    throw new Error("serializing " + uneval(v) + " should have failed with an exception");
}

// Unsupported object types.
check(new Error("oops"));
check(this);
check(Math);
check(function () {});
check(new Proxy({}, {}));

// A failing getter.
check({get x() { throw new Error("fail"); }});

// Mismatched scopes.
for (let [write_scope, read_scope] of [['SameProcessSameThread', 'SameProcessDifferentThread'],
                                       ['SameProcessSameThread', 'DifferentProcess'],
                                       ['SameProcessDifferentThread', 'DifferentProcess']])
{
  var ab = new ArrayBuffer(12);
  var buffer = serialize(ab, [ab], { scope: write_scope });
  var caught = false;
  try {
    deserialize(buffer, { scope: read_scope });
  } catch (exc) {
    caught = true;
  }
  assertEq(caught, true, `${write_scope} clone buffer should not be deserializable as ${read_scope}`);
}

reportCompare(0, 0, "ok");
