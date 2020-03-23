load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError

var x = {f:20};

function foo() {
  for (var i = 0; i < 10; i++)
    x.f;
}
foo();

gc();

// a type barrier needs to be generated for the access on x within foo,
// even though its type set is initially empty after the GC.
x = undefined;

foo();
