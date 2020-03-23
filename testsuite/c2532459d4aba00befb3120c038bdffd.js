load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError
for (var c in foo)
  try {
    throw new Error();
  } catch (e)  {}
