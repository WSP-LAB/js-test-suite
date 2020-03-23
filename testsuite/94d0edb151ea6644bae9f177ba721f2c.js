load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
// Check that new.target works properly in defaults.

function check(expected, actual = new.target) { assertEq(actual, expected); }
new check(check);
check(undefined);

let evaldCheck = eval("(" + check.toString() + ")");
new evaldCheck(evaldCheck);
evaldCheck(undefined);

function testInFunction() {
    function checkInFunction(expected, actual = new.target) { assertEq(actual, expected); }
    new checkInFunction(checkInFunction);
    checkInFunction(undefined);

    let evaldCheckInFunction = eval("(" + checkInFunction.toString() + ")");
    new evaldCheckInFunction(evaldCheckInFunction);
    evaldCheckInFunction(undefined);
}

testInFunction();
new testInFunction();

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
