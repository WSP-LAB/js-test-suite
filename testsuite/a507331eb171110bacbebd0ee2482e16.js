load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("2a038e91f6e5f6c7add968f0a7889dbd.js");
load("cb964fe54ef7245c321e0e470f72fd7c.js");
// |reftest| skip-if(!this.hasOwnProperty("TypedObject"))
var BUGNUMBER = 898359;
var summary = 'TypedObjects reference type aliasing';
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

  var MyType = new StructType({f: Object});

  // Test aliasing
  var myInstance = new MyType({f: {a: 22}});
  var anotherInstance = new MyType({f: myInstance.f});
  assertEq(myInstance.f.a, 22);
  assertEq(myInstance.f.a, anotherInstance.f.a);

  myInstance.f.a += 1;
  assertEq(myInstance.f.a, 23);
  assertEq(myInstance.f.a, anotherInstance.f.a);

  reportCompare(true, true, "TypedObjects reference type aliasing tests");
}

runTests();
