load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: InternalError
function foo() { return "tracejit,methodjit"; };
function baz(on) {
    foo('bar');
}
eval("\
test();\
function test() {\
  baz(true);\
  test();\
}\
");
