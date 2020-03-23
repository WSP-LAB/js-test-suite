load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var obj = { method() { } };
assertThrowsInstanceOf(() => {
    new obj.method;
}, TypeError);

obj = { constructor() { } };
assertThrowsInstanceOf(() => {
    new obj.constructor;
}, TypeError);

if (typeof reportCompare === "function")
    reportCompare(true, true);
