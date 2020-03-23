load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
// It's invalid to eval super.prop inside a nested non-method, even if it
// appears inside a method definition
assertThrowsInstanceOf(() =>
({
    method() {
        (function () {
            eval('super.toString');
        })();
    }
}).method(), SyntaxError);

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
