load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("2a038e91f6e5f6c7add968f0a7889dbd.js");
load("cb964fe54ef7245c321e0e470f72fd7c.js");
// |reftest| skip-if(!this.hasOwnProperty("TypedObject"))
var BUGNUMBER = 1122552;
var summary = 'Introduce [[GetOwnProperty]] object op';

var StructType = TypedObject.StructType;
var uint8 = TypedObject.uint8;

function runTests() {
    print(BUGNUMBER + ": " + summary);

    var PixelType = new StructType({x: uint8, y: uint8});
    var pixel = new PixelType({x: 15, y: 16});

    var desc = Object.getOwnPropertyDescriptor(pixel, 'x');
    assertEq(typeof desc, "object");
    assertEq(desc.value, 15);
    assertEq(desc.enumerable, true);
    assertEq(desc.writable, true);
    assertEq(desc.configurable, false);

    desc = Object.getOwnPropertyDescriptor(pixel, 'dummy');
    assertEq(typeof desc, "undefined");

    reportCompare(true, true);
    print("Tests complete");
}

runTests();
