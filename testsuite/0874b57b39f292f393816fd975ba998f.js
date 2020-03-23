load("e2371540d876710daf38e749390aa2a3.js");
description('Test Promise.resolve in non dom directory.');

var globalObject = this;
globalObject.jsTestIsAsync = true;
var value = {
  then: function(fulfillCallback, rejectCallback) {
    testPassed('value.then is called.');
    globalObject.thisValue = this;
    shouldBe('thisValue', 'value');
    fulfillCallback('hello');
  }
};
var promise = new Promise(function(resolve) { resolve(value); });

promise.then(function(result) {
  testPassed('fulfilled');
  globalObject.result = result;
  shouldBeEqualToString('result', 'hello');
  finishJSTest();
}, function() {
  testFailed('rejected');
  finishJSTest();
});

debug('The promise is not fulfilled until after this function call executes.');

load("cf1a0efae1078faee510f7bda78d4902.js");
