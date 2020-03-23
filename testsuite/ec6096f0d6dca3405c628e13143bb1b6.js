load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("e2c808509c360663d6364e14c187fc8f.js");

function f(v)
{
  if (v + "")
    ({} = v);
}

f(true);
f({});
assertThrowsInstanceOf(() => f(null), TypeError);
assertThrowsInstanceOf(() => f(undefined), TypeError);

function g(v)
{
  if (v + "")
    ({} = v);
}

g(true);
g({});
assertThrowsInstanceOf(() => g(undefined), TypeError);
assertThrowsInstanceOf(() => g(null), TypeError);

function h(v)
{
  if (v + "")
    ([] = v);
}

h([true]);
h("foo");
assertThrowsInstanceOf(() => h(undefined), TypeError);
assertThrowsInstanceOf(() => h(null), TypeError);

Object.defineProperty(Boolean.prototype, "v",
                      { get() { "use strict"; return typeof this; },
                        enumerable: true,
                        configurable: true });

Object.defineProperty(Number.prototype, "v",
                      { get() { "use strict"; return typeof this; },
                        enumerable: true,
                        configurable: true });

Object.defineProperty(String.prototype, "v",
                      { get() { "use strict"; return typeof this; },
                        enumerable: true,
                        configurable: true });

Object.defineProperty(Symbol.prototype, "v",
                      { get() { "use strict"; return typeof this; },
                        enumerable: true,
                        configurable: true });

function primitiveThisSupported()
{
  return 3.14.custom === "number";
}

function primitiveThisTests()
{
  function f(v)
  {
    var type = typeof v;

    ({ v } = v);

    assertEq(v, type);
  }

  f(true);
  f(3.14);
  f(72);
  f("ohai");
  f(Symbol.iterator);

  assertThrowsInstanceOf(() => f(undefined), TypeError);
  assertThrowsInstanceOf(() => f(null), TypeError);

  function g(v)
  {
    var type = typeof v;

    ({ v } = v);

    assertEq(v, type);
  }

  g(true);
  g(3.14);
  g(72);
  g("ohai");
  g(Symbol.iterator);

  assertThrowsInstanceOf(() => g(null), TypeError);
  assertThrowsInstanceOf(() => g(undefined), TypeError);
}
if (primitiveThisSupported())
  primitiveThisTests();

// Ensure the internal implementation of destructuring object pattern
// assignment -- using a self-hosted intrinsic function -- works even when lazy
// standard class initialization hasn't occurred.  Unfortunately we can't use
// |newGlobal()| because that method eagerly initializes standard classes.
evalcx("({} = 1);", evalcx("lazy"));
