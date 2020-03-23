load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("2a038e91f6e5f6c7add968f0a7889dbd.js");
load("cb964fe54ef7245c321e0e470f72fd7c.js");
// |reftest| skip-if(!this.hasOwnProperty("TypedObject"))
var BUGNUMBER = 917454;
var summary = 'objecttype';

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var T = TypedObject;

function runTests() {
  var Point = T.float32.array(3);
  var Line = new T.StructType({from: Point, to: Point});
  var Lines = Line.array(3);

  var lines = new Lines([
    {from: [1, 2, 3], to: [4, 5, 6]},
    {from: [7, 8, 9], to: [10, 11, 12]},
    {from: [13, 14, 15], to: [16, 17, 18]}
  ]);

  assertEq(T.objectType(lines), Lines);
  assertEq(T.objectType(lines[0]), Line);
  assertEq(T.objectType(lines[0].from[0]), T.float64);
  assertEq(T.objectType(""), T.String);
  assertEq(T.objectType({}), T.Object);
  assertEq(T.objectType([]), T.Object);
  assertEq(T.objectType(function() { }), T.Object);
  assertEq(T.objectType(undefined), T.Any);

  reportCompare(true, true);
  print("Tests complete");
}

runTests();


