load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("2a038e91f6e5f6c7add968f0a7889dbd.js");
load("cb964fe54ef7245c321e0e470f72fd7c.js");
// |reftest| skip-if(!this.hasOwnProperty("TypedObject"))
var BUGNUMBER = 926401;
var summary = 'TypedObjects ArrayType implementation';

// Test creation of zero-length array

function runTest() {
  var T = TypedObject;
  var Color = new T.StructType({'r': T.uint8, 'g': T.uint8, 'b': T.uint8});
  var Rainbow = Color.array(0);
  var theOneISawWasJustBlack = new Rainbow([]);
  if (typeof reportCompare === "function")
    reportCompare(true, true);
  print("Tests complete");
}

runTest();
