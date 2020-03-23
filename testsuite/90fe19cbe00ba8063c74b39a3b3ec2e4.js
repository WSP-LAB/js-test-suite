load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("99af2c3994932cf7fcec8ec85c6dc330.js");
for (var v of [-300, 255.6, 300, 3.5, -3.9]) {
    var a = new Uint8ClampedArray([v]);
    var b = new Uint8ClampedArray(1);
    b[0] = v;

    assertEq(a[0], b[0]);
}

reportCompare(true, true);
