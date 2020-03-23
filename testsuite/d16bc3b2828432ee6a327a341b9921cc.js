load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("fec05e691cc28279400c1df89b47a7cf.js");
var BUGNUMBER = 1054755;
var summary = 'String.prototype.{startsWith,endsWith,includes} should call IsRegExp.';

print(BUGNUMBER + ": " + summary);

for (var method of ["startsWith", "endsWith", "includes"]) {
  for (var re of [/foo/, new RegExp()]) {
    assertThrowsInstanceOf(() => "foo"[method](re), TypeError);

    re[Symbol.match] = false;
    "foo"[method](re);
  }

  for (var v1 of [true, 1, "bar", [], {}, Symbol.iterator]) {
    assertThrowsInstanceOf(() => "foo"[method]({ [Symbol.match]: v1 }), TypeError);
  }

  for (var v2 of [false, 0, undefined, ""]) {
    "foo"[method]({ [Symbol.match]: v2 });
  }
}

if (typeof reportCompare === "function")
  reportCompare(true, true);
