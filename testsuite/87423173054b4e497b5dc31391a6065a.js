load("201224b0d1c296b45befd2285e95dd42.js");
function reportCompare (expected, actual, description) {}
function f()
{
  f(f, 0x09AA, 0x09B0, f);
}
try {
  reportCompare ("outer", f(),
                 "Inner function statement should not have been called.");
} catch (e) {}
