load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:Error

// Test that we don't permit structs whose fields exceed 32 bits.

if (!this.hasOwnProperty("TypedObject"))
  throw new Error();

var Vec3u16Type = TypedObject.uint16.array((1073741823));
var PairVec3u16Type = new TypedObject.StructType({ fst: Vec3u16Type, snd: Vec3u16Type });
new PairVec3u16Type();
