load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
if (!this.Promise) {
    reportCompare(true,true);
    quit(0);
}

assertEq(Object.keys(Promise).length, 0);
assertEq(Object.keys(Promise.prototype).length, 0);

reportCompare(0, 0, "ok");
