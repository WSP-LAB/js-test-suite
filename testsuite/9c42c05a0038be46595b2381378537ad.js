load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError

{
  for (var i = 0; i < 100; i++)
    a += i;
  let a = 1;
}
