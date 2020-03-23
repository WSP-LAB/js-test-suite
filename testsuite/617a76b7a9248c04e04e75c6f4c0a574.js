load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("9f65b4024a3bba5864aa373908b00833.js");
// Annex B.3.3.1 disallows Annex B lexical function behavior when redeclaring a
// parameter.

(function(f) {
  if (true) function f() {  }
  assertEq(f, 123);
}(123));

(function(f) {
  { function f() {  } }
  assertEq(f, 123);
}(123));


if (typeof reportCompare === "function")
  reportCompare(true, true);
