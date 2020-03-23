load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var BUGNUMBER = 1135377;
var summary = "Implement RegExp unicode flag -- empty class should not match anything.";

print(BUGNUMBER + ": " + summary);

assertEq(/[]/u.exec("A"),
         null);
assertEq(/[]/u.exec("\uD83D"),
         null);
assertEq(/[]/u.exec("\uDC38"),
         null);
assertEq(/[]/u.exec("\uD83D\uDC38"),
         null);

assertEqArray(/[^]/u.exec("A"),
              ["A"]);
assertEqArray(/[^]/u.exec("\uD83D"),
              ["\uD83D"]);
assertEqArray(/[^]/u.exec("\uDC38"),
              ["\uDC38"]);
assertEqArray(/[^]/u.exec("\uD83D\uDC38"),
              ["\uD83D\uDC38"]);

if (typeof reportCompare === "function")
    reportCompare(true, true);
