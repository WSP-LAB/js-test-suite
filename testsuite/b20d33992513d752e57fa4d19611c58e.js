load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("99af2c3994932cf7fcec8ec85c6dc330.js");
// Ensure that when sorting arrays of size greater than 128, which
// calls RadixSort under the hood, we don't access the 'buffer' 
// property of the typed array directly. 


// The buggy behavior in the RadixSort is only exposed when we use
// float arrays, but checking everything just to be sure.
for (var ctor of anyTypedArrayConstructors) {
    var testArray = new ctor(1024);
    Object.defineProperty(testArray, "buffer", { get() { throw new Error("FAIL: Buffer accessed directly"); }  });
    testArray.sort();
}

if (typeof reportCompare === "function")
    reportCompare(true, true);
