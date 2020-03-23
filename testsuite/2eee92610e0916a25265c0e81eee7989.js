load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("9f65b4024a3bba5864aa373908b00833.js");
// @@unscopables does not affect the global environment.

this.x = "global property x";
let y = "global lexical y";
this[Symbol.unscopables] = {x: true, y: true};
assertEq(x, "global property x");
assertEq(y, "global lexical y");
assertEq(eval("x"), "global property x");
assertEq(eval("y"), "global lexical y");

// But it does affect `with` statements targeting the global object.
{
    let x = "local x";
    with (this)
        assertEq(x, "local x");
}

reportCompare(0, 0);
