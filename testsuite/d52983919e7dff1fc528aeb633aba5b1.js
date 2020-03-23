load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
// |reftest| skip-if(Android)
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributors: Igor Bukanov
 */

// Test that we can terminate looping array enumeration
function test() {
    if (typeof timeout != "function")
	return;

    var p = new Proxy({}, { onwKeys: function() { return Array(1e9); }});

    expectExitCode(6);
    timeout(0.001);

    var n = 0;
    for (i in p) { ++n;}
    return n;
}

test();
reportCompare(0, 0, "ok");
