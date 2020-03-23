load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("fec05e691cc28279400c1df89b47a7cf.js");
var BUGNUMBER = 1290655;
var summary = "String.prototype.match should call GetMethod.";

print(BUGNUMBER + ": " + summary);

function create(value) {
    return {
        [Symbol.match]: value,
        toString() {
            return "-";
        }
    };
}

var expected = ["-"];
expected.index = 1;
expected.input = "a-a";

for (let v of [null, undefined]) {
    assertDeepEq("a-a".match(create(v)), expected);
}

for (let v of [1, true, Symbol.iterator, "", {}, []]) {
    assertThrowsInstanceOf(() => "a-a".match(create(v)), TypeError);
}

if (typeof reportCompare === "function")
    reportCompare(true, true);
