load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
var BUGNUMBER = 1185106;
var summary = "async name token in property and object destructuring pattern";

print(BUGNUMBER + ": " + summary);

{
  let a = { async: 10 };
  assertEq(a.async, 10);
}

{
  let a = { async() {} };
  assertEq(a.async instanceof Function, true);
  assertEq(a.async.name, "async");
}

{
  let async = 11;
  let a = { async };
  assertEq(a.async, 11);
}

{
  let { async } = { async: 12 };
  assertEq(async, 12);
}

{
  let { async = 13 } = {};
  assertEq(async, 13);
}

{
  let { async: a = 14 } = {};
  assertEq(a, 14);
}

if (typeof reportCompare === "function")
    reportCompare(true, true);
