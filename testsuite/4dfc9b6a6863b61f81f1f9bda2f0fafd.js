load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
//Bug 350712

function iterator () {
    for (var i in []);
}

try {
    try {
        throw 5;
    }
    catch(error if iterator()) {
        assertEq(false, true);
    }
}
catch(error) {
  assertEq(error, 5);
}

if (typeof reportCompare === "function")
    reportCompare(true, true);
