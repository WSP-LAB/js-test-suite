load("201224b0d1c296b45befd2285e95dd42.js");
function getTestCaseResult(expected, actual) {
      if (actual != expected)
              return Math.abs(actual - expected) <= 1E-10;
}
function InstanceOf(object, constructor) {
      while ( object != null )
              object = object.__proto__;
}
function WorkerBee () {}
function Engineer () {}
Engineer.prototype = new WorkerBee();
var pat = new Engineer();
getTestCaseResult(pat.__proto__.__proto__.__proto__.__proto__ == Object.prototype);
getTestCaseResult(InstanceOf(pat, Engineer));
evaluate("getTestCaseResult( Object.prototype.__proto__ );",
	 { isRunOnce: true });
