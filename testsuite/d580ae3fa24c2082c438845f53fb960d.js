load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("e7298b87458610fb43224d2d0185d930.js");

var actual = '';
var expected = 'A0B1B2C0C1C2';

var x = Iterator([1,2,3], true);

for (var a in x) {
  actual += 'A' + a;
  for (var b in x) {
    actual += 'B' + b;
  }
}

var y = Iterator([1,2,3], true);

for (var c in y) {
  actual += 'C' + c;
}
for (var d in y) {
  actual += 'D' + d;
}

reportCompare(expected, actual, "Handle nested Iterator iteration right");
