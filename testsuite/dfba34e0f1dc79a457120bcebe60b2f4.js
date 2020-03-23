load("e2371540d876710daf38e749390aa2a3.js");
description("Test for correct properties on Error objects.");

function enumerableProperties(object)
{
    var result = [];
    for (var i in object)
        result.push(i);
    return result;
}

try {
    // generate a RangeError.
    [].length = -1;
} catch (rangeError) {
    var nativeError = rangeError;
    var error = new Error("message");

    shouldBe('enumerableProperties(error).sort()', '["column", "line", "sourceURL"]');
    shouldBe('enumerableProperties(nativeError).sort()', '["column", "line", "sourceURL"]');

    shouldBe('Object.getPrototypeOf(nativeError).name', '"RangeError"');
    shouldBe('Object.getPrototypeOf(nativeError).message', '""');
}

load("cf1a0efae1078faee510f7bda78d4902.js");
