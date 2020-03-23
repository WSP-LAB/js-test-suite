load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var BUGNUMBER = 1269719;
var summary = "RegExp.prototype[@@replace] should check latin1/twoBytes for all strings used in relate operation.";

print(BUGNUMBER + ": " + summary);

var ans = [
  "[AB$2$3$]",
  "[AB$2$3$]\u3048",
  "[AB$2$3$]",
  "[AB$2$3$]\u3048",
  "[A\u3044$2$3$]",
  "[A\u3044$2$3$]\u3048",
  "[A\u3044$2$3$]",
  "[A\u3044$2$3$]\u3048",
  "[\u3042B$2$3$]",
  "[\u3042B$2$3$]\u3048",
  "[\u3042B$2$3$]",
  "[\u3042B$2$3$]\u3048",
  "[\u3042\u3044$2$3$]",
  "[\u3042\u3044$2$3$]\u3048",
  "[\u3042\u3044$2$3$]",
  "[\u3042\u3044$2$3$]\u3048",
];
var i = 0;
for (var matched of ["A", "\u3042"]) {
  for (var group1 of ["B", "\u3044"]) {
    for (var string of ["C", "\u3046"]) {
      for (var replacement of ["[$&$`$'$1$2$3$]", "[$&$`$'$1$2$3$]\u3048"]) {
        var myRegExp = {
          get exec() {
            return function() {
              return [matched, group1];
            };
          }
        };
        assertEq(RegExp.prototype[Symbol.replace].call(myRegExp, string, replacement), ans[i]);
        i++;
      }
    }
  }
}

if (typeof reportCompare === "function")
    reportCompare(true, true);
