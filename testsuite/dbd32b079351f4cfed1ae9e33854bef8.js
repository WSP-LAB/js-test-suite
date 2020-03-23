load("201224b0d1c296b45befd2285e95dd42.js");
var arr = [StopIteration, StopIteration, StopIteration, StopIteration, {}];
var obj = {};
var x;
var result = 'no error';
try {
    for (var i = 0; i < arr.length; i++)
        x = (obj instanceof arr[i]);  // last iteration throws, triggering deep bail
} catch (exc) {
    result = exc.constructor.name;
}
assertEq(result, 'TypeError');

