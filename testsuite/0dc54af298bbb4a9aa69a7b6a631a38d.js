load("201224b0d1c296b45befd2285e95dd42.js");
/* Parse correctly. */

function assignToClassListStrict(e) {
  "use strict";
  try {
    e.classList = "foo";
    ok(false, "assigning to classList didn't throw");
  } catch (e) { }
}
