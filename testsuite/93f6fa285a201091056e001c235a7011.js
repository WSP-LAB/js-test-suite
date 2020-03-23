load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:Error

if (!this.hasOwnProperty("TypedObject"))
  throw new Error();

TypedObject.uint8.array(.0000000009);
