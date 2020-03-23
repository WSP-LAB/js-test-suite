load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("fec05e691cc28279400c1df89b47a7cf.js");
var BUGNUMBER = 1290655;
var summary = "String.prototype.split should call GetMethod.";

print(BUGNUMBER + ": " + summary);

function create(value) {
    return {
        [Symbol.split]: value,
        toString() {
            return "-";
        }
    };
}

for (let v of [null, undefined]) {
    assertDeepEq("a-a".split(create(v)), ["a", "a"]);
}

for (let v of [1, true, Symbol.iterator, "", {}, []]) {
    assertThrowsInstanceOf(() => "a-a".split(create(v)), TypeError);
}

if (typeof reportCompare === "function")
    reportCompare(true, true);
