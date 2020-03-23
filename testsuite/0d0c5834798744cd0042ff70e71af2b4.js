load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("2a038e91f6e5f6c7add968f0a7889dbd.js");
load("cb964fe54ef7245c321e0e470f72fd7c.js");
// |reftest| skip-if(!this.hasOwnProperty("TypedObject"))
var BUGNUMBER = 922216;
var summary = 'TypedObjects Equivalent Numeric Types';

var T = TypedObject;

function runTests() {
  print(BUGNUMBER + ": " + summary);

  var simpleTypes = [
    T.int8, T.int16, T.int32,
    T.uint8, T.uint16, T.uint32,
    T.float32, T.float64,
    T.Object, T.Any, T.string
  ];

  for (var i = 0; i < simpleTypes.length; i++)
    for (var j = 0; j < simpleTypes.length; j++)
      assertEq(i == j, simpleTypes[i].equivalent(simpleTypes[j]));

  reportCompare(true, true);
  print("Tests complete");
}

runTests();
