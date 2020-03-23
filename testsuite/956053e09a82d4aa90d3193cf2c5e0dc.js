load("201224b0d1c296b45befd2285e95dd42.js");
// Test that you can't call the SavedFrame constructor and can only use
// SavedFrame's getters on SavedFrame instances.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

let proto = Object.getPrototypeOf(saveStack());

// Can't create new SavedFrame instances by hand.
print("Testing constructor");
assertThrowsInstanceOf(() => {
  new proto.constructor();
}, TypeError);

for (let p of ["source", "line", "column", "functionDisplayName", "parent"]) {
  print("Testing getter: " + p);
  // The getters shouldn't work on the prototype.
  assertThrowsInstanceOf(() => proto[p], TypeError);

  // Nor should they work on random objects.
  let o = {};
  Object.defineProperty(o, p, Object.getOwnPropertyDescriptor(proto, p));
  assertThrowsInstanceOf(() => o[p], TypeError);
}
