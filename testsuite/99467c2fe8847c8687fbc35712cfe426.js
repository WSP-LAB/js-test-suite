load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("9f65b4024a3bba5864aa373908b00833.js");
// |reftest| skip-if(!xulRuntime.shell)

assertThrowsInstanceOf(() => evaluate(`try { throw {} } catch ({e}) { var e; }`), SyntaxError);
assertThrowsInstanceOf(() => evaluate(`try { throw {} } catch ({e}) { eval('var e'); }`), SyntaxError);

assertThrowsInstanceOf(() => new Function(`try { throw {} } catch ({e}) { var e; }`), SyntaxError);
assertThrowsInstanceOf(new Function(`try { throw {} } catch ({e}) { eval('var e'); }`), SyntaxError);

if (typeof reportCompare === "function")
    reportCompare(true, true);
