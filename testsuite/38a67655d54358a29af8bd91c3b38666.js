load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("f1d590df6c82187c88fd85aaf83a74be.js");
assertEq(Math.cbrt(1), 1);
assertEq(Math.cbrt(-1), -1);

assertNear(Math.cbrt(1e-300), 1e-100);
assertNear(Math.cbrt(-1e-300), -1e-100);

var cbrt_data = [
    [ Math.E, 1.3956124250860895 ], 
    [ Math.PI, 1.4645918875615231 ], 
    [ Math.LN2, 0.8849970445005177 ], 
    [ Math.SQRT2, 1.1224620483093728 ]
];

for (var [x, y] of cbrt_data)
    assertNear(Math.cbrt(x), y);

reportCompare(0, 0, "ok");
