load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("1b3dbc1cddb6b5cc8ace501cab6be659.js");
// |reftest| skip-if(!xulRuntime.shell)
// -*- Mode: C++; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 4 -*-
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

function test() {
    var check = clone_object_check;

    // Invoke with the simple parameter to compile the function before doing
    // deep clone, on --ion-eager case, to avoid timeout.
    check({x: null, y: undefined});

    // Try cloning a deep object. Don't fail with "too much recursion".
    var b = {};
    var current = b;
    for (var i = 0; i < 10000; i++) {
        var next = {};
        current['x' + i] = next;
        current = next;
    }
    check(b, "deepObject");  // takes 2 seconds :-\
}

test();
reportCompare(0, 0, 'ok');
