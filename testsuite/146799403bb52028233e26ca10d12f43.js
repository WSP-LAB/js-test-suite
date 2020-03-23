load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("2a038e91f6e5f6c7add968f0a7889dbd.js");
load("cb964fe54ef7245c321e0e470f72fd7c.js");
// |reftest| skip-if(!this.hasOwnProperty("TypedObject"))
var BUGNUMBER = 578700;
var summary = 'TypedObjects StructType prototype chains';

var ArrayType = TypedObject.ArrayType;
var StructType = TypedObject.StructType;
var float32 = TypedObject.float32;

function runTests() {
  var Point = new ArrayType(float32, 3);
  var Line = new StructType({from: Point, to: Point});
  var Lines = new ArrayType(Line, 3);

  var lines = new Lines([
    {from: [1, 2, 3], to: [4, 5, 6]},
    {from: [7, 8, 9], to: [10, 11, 12]},
    {from: [13, 14, 15], to: [16, 17, 18]}
  ]);

  assertEq(lines[1].to[1], 11);
  assertEqArray(lines[2].from, [13, 14, 15]);

  reportCompare(true, true);
  print("Tests complete");
}

runTests();


