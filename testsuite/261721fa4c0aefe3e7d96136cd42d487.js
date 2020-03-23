load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
if (!this.Promise) {
    this.reportCompare && reportCompare(true, true);
    quit(0);
}

var promise = Promise.resolve(1);
var FakeCtor = function(exec){ exec(function(){}, function(){}); };
Object.defineProperty(Promise, Symbol.species, {value: FakeCtor});
// This just shouldn't crash. It does without bug 1287334 fixed.
promise.then(function(){});

this.reportCompare && reportCompare(true, true);
