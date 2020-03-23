load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
// |reftest| skip-if(!xulRuntime.shell) -- needs getSelfHostedValue and drainJobQueue

if (!this.Promise) {
    this.reportCompare && reportCompare(true,true);
    quit(0);
}

function onResolved(val) {
    result = 'resolved with ' + val;
}

function onRejected(val) {
    result = 'rejected with ' + val;
}

// Replacing `Promise#then` shouldn't affect addPromiseReactions.
Promise.prototype.then = 1;

// Replacing Promise@@species shouldn't affect addPromiseReactions.
Promise[Symbol.species] = function(){};

// Replacing `Promise` shouldn't affect addPromiseReactions.
let PromiseCtor = Promise;
Promise = {};

let result;
let res;
let rej;
let p = new PromiseCtor(function(res_, rej_) { res = res_; rej = rej_; });

addPromiseReactions(p, onResolved, onRejected);
res('foo');
drainJobQueue();
assertEq(result, 'resolved with foo')

p = new PromiseCtor(function(res_, rej_) { res = res_; rej = rej_; });

addPromiseReactions(p, onResolved, onRejected);
rej('bar');
drainJobQueue();
assertEq(result, 'rejected with bar');

this.reportCompare && reportCompare(true,true);
