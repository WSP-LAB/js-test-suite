load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
if (!this.Promise) {
    this.reportCompare && reportCompare(true,true);
    quit(0);
}

var global = newGlobal();
Promise.prototype.then = global.Promise.prototype.then;
p1 = new Promise(function f(r) {
    r(1);
});
p2 = p1.then(function g(){});

this.reportCompare && reportCompare(true,true);
