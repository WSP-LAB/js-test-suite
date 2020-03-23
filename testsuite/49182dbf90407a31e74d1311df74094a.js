load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("9f65b4024a3bba5864aa373908b00833.js");
try {
  eval("var shouldNotBeDefined1; function NaN(){}; var shouldNotBeDefined2;");
} catch (e) {
}

assertEq(Object.getOwnPropertyDescriptor(this, 'shouldNotBeDefined2'), undefined);
assertEq(Object.getOwnPropertyDescriptor(this, 'shouldNotBeDefined1'), undefined);

if (typeof reportCompare === "function")
  reportCompare(true, true);
