load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:RangeError

if (!this.hasOwnProperty("TypedObject"))
  throw new RangeError();

function eval() {
    yield(undefined)
}
new TypedObject.StructType();
eval();
