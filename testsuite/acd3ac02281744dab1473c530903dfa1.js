load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("2a038e91f6e5f6c7add968f0a7889dbd.js");
load("cb964fe54ef7245c321e0e470f72fd7c.js");
// |reftest| skip-if(!this.hasOwnProperty("TypedObject"))
var BUGNUMBER = 898359;
var summary = 'TypedObjects reference type default values';
var actual = '';
var expect = '';

var ArrayType = TypedObject.ArrayType;
var StructType = TypedObject.StructType;
var Any = TypedObject.Any;
var Object = TypedObject.Object;
var string = TypedObject.string;

function runTests()
{
  printBugNumber(BUGNUMBER);
  printStatus(summary);

  var S = new StructType({any: Any,
                          object: Object,
                          string: string});
  var s = new S();

  assertEq(s.any, undefined);
  assertEq(s.object, null);
  assertEq(s.string, "");

  reportCompare(true, true, "TypedObjects ref type uninit");
}

runTests();
