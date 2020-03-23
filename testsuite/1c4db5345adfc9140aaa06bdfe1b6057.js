load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
foo = 1;
Object.defineProperty(this, "foo", {writable:false, configurable:true});
foo = 2;
assertEq(foo, 1);

if (typeof reportCompare === "function")
    reportCompare(true, true);
