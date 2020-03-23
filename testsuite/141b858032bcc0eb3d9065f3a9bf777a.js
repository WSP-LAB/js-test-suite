load("201224b0d1c296b45befd2285e95dd42.js");

(function f(i) {
  // Add an OSR block which does not define the callee.
  for (; false; ) {};

  // Use the callee.
  if (i)
    f(i - 1);
})(50);
