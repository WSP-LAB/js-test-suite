load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("2a038e91f6e5f6c7add968f0a7889dbd.js");
load("cb964fe54ef7245c321e0e470f72fd7c.js");
// |reftest| skip-if(!this.hasOwnProperty("TypedObject"))
var BUGNUMBER = 898356;

var {StructType, uint32, Object, Any, storage, objectType} = TypedObject;

function main() { // once a C programmer, always a C programmer.
  print(BUGNUMBER + ": " + summary);

  var Uints = new StructType({f: uint32, g: uint32});

  var anArray = new Uint32Array(2);
  anArray[0] = 22;
  anArray[1] = 44;

  var uints = new Uints(anArray.buffer);
  assertEq(storage(uints).buffer, anArray.buffer);
  assertEq(uints.f, 22);
  assertEq(uints.g, 44);

  uints.f++;
  assertEq(anArray[0], 23);

  reportCompare(true, true);
  print("Tests complete");
}

main();
