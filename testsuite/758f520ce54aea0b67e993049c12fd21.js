load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("e2c808509c360663d6364e14c187fc8f.js");
load("dc4b20628140c803c89c741458a4c2d0.js");

assertEqArray([...[1, 2, 3]], [1, 2, 3]);
assertEqArray([1, ...[2, 3, 4], 5], [1, 2, 3, 4, 5]);
assertEqArray([1, ...[], 2], [1, 2]);
assertEqArray([1, ...[2, 3], 4, ...[5, 6]], [1, 2, 3, 4, 5, 6]);
assertEqArray([1, ...[], 2], [1, 2]);
assertEqArray([1,, ...[2]], [1,, 2]);
assertEqArray([1,, ...[2],, 3,, 4,], [1,, 2,, 3,, 4,]);
assertEqArray([...[1, 2, 3],,,,], [1, 2, 3,,,,]);
assertEqArray([,,...[1, 2, 3],,,,], [,,1,2,3,,,,]);
assertEqArray([...[1, 2, 3],,,,...[]], [1,2,3,,,,]);

assertEqArray([...[undefined]], [undefined]);

// other iterable objects
assertEqArray([...new Int32Array([1, 2, 3])], [1, 2, 3]);
assertEqArray([..."abc"], ["a", "b", "c"]);
assertEqArray([...[1, 2, 3][Symbol.iterator]()], [1, 2, 3]);
assertEqArray([...new Set([1, 2, 3])], [1, 2, 3]);
assertEqArray([...new Map([["a", "A"], ["b", "B"], ["c", "C"]])].map(([k, v]) => k + v), ["aA", "bB", "cC"]);
let itr = {};
itr[Symbol.iterator] = function () {
    return {
        i: 1,
        next: function() {
            if (this.i < 4)
                return { value: this.i++, done: false };
            else
                return { value: undefined, done: true };
        }
    };
}
assertEqArray([...itr], [1, 2, 3]);
function* gen() {
    for (let i = 1; i < 4; i ++)
        yield i;
}
assertEqArray([...gen()], [1, 2, 3]);

let a, b = [1, 2, 3];
assertEqArray([...a=b], [1, 2, 3]);

// 12.2.4.1.2 Runtime Semantics: ArrayAccumulation
// If Type(spreadObj) is not Object, then throw a TypeError exception.
assertThrowsInstanceOf(() => [...null], TypeError);
assertThrowsInstanceOf(() => [...undefined], TypeError);

