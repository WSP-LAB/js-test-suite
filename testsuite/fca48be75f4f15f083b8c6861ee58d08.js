load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError

if (!this.hasOwnProperty("TypedObject"))
  throw new TypeError();

var Vec3 = TypedObject.float32.array(3);
var Sprite = Vec3.array(3);
var mario = new Sprite();
mario[/\u00ee[]/] = new Vec3([1, 0, 0]);

