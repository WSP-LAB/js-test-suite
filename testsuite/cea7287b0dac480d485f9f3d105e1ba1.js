load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("2a038e91f6e5f6c7add968f0a7889dbd.js");
load("cb964fe54ef7245c321e0e470f72fd7c.js");
// |reftest| skip-if(!this.hasOwnProperty("TypedObject"))
var BUGNUMBER = 898356;

var {StructType, uint32, Object, Any, storage, objectType} = TypedObject;

function main() { // once a C programmer, always a C programmer.
  print(BUGNUMBER + ": " + summary);

  var Uints = new StructType({f: uint32, g: uint32});
  var uints = new Uints({f: 0, g: 1});
  assertEq(storage(uints) != null, true);

  var Objects = new StructType({f: Object, g: Object});
  var objects = new Objects({f: 0, g: 1});
  assertEq(storage(objects), null);

  var Anys = new StructType({f: Any, g: Any});
  var anys = new Anys({f: 0, g: 1});
  assertEq(storage(anys), null);

  // Note: test that `mixed.g`, when derived from an opaque buffer,
  // remains opaque.
  var Mixed = new StructType({f: Object, g: Uints});
  var mixed = new Mixed({f: 0, g: {f: 22, g: 44}});
  assertEq(storage(mixed), null);
  assertEq(objectType(mixed.g), Uints);
  assertEq(storage(mixed.g), null);

  reportCompare(true, true);
  print("Tests complete");
}

main();
