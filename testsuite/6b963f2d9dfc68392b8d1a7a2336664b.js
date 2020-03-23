load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var obj = { get a() { return 1; } };
assertThrowsInstanceOf(() => {
    new Object.getOwnPropertyDescriptor(obj, "a").get
}, TypeError);

obj = { set a(b) { } };
assertThrowsInstanceOf(() => {
    new Object.getOwnPropertyDescriptor(obj, "a").set
}, TypeError);

obj = { get a() { return 1; }, set a(b) { } };
assertThrowsInstanceOf(() => {
    new Object.getOwnPropertyDescriptor(obj, "a").get
}, TypeError);
assertThrowsInstanceOf(() => {
    new Object.getOwnPropertyDescriptor(obj, "a").set
}, TypeError);

if (typeof reportCompare === "function")
    reportCompare(true, true);
