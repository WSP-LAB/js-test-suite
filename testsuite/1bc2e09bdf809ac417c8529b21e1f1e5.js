load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError
{
  while (x && 0) {}
  let x
}
