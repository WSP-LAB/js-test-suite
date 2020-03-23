load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError

outer:
  for (var elem in {x:1})
    if (p > "q")
      continue outer;
