load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("f1d590df6c82187c88fd85aaf83a74be.js");
assertNear(Math.log10(2), 0.3010299956639812);
assertNear(Math.log10(7), 0.8450980400142568);
assertNear(Math.log10(Math.E), Math.LOG10E);

for (var i = -10; i < 10; i++)
    assertNear(Math.log10(Math.pow(10, i)), i);

reportCompare(0, 0, 'ok');

