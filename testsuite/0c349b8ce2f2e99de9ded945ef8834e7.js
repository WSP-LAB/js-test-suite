load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("f1d590df6c82187c88fd85aaf83a74be.js");
for (var i = -1074; i < 1023; i++)
    assertNear(Math.log2(Math.pow(2, i)), i);

assertNear(Math.log2(5), 2.321928094887362);
assertNear(Math.log2(7), 2.807354922057604);
assertNear(Math.log2(Math.E), Math.LOG2E);

reportCompare(0, 0, "ok");
