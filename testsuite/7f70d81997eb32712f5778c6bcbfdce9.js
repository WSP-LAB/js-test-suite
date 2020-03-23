load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("9f65b4024a3bba5864aa373908b00833.js");
// |reftest| skip-if(!xulRuntime.shell)

function assertEvaluateAndIndirectEvalThrows(str) {
  assertThrowsInstanceOf(() => evaluate(str), TypeError);
  assertThrowsInstanceOf(() => (1,eval)(str), TypeError);
}

// Regular vars
assertEvaluateAndIndirectEvalThrows(`var NaN; function NaN() {}`);

// for-of vars
assertEvaluateAndIndirectEvalThrows(`for (var NaN of []); function NaN() {}`);

// Annex B.3.3 synthesized vars
assertEvaluateAndIndirectEvalThrows(`{ function NaN() {} } function NaN() {}`);

// Non-data properties
Object.defineProperty(this, 'foo', { set: function() {} });
assertEvaluateAndIndirectEvalThrows(`var foo; function foo() {}`);
assertEvaluateAndIndirectEvalThrows(`for (var foo of []); function foo() {}`);
assertEvaluateAndIndirectEvalThrows(`{ function foo() {} } function foo() {}`);

if (typeof reportCompare === "function")
  reportCompare(true, true);
