load("201224b0d1c296b45befd2285e95dd42.js");
"use strict";
options("werror");

// This construct causes a strict warning, but we shouldn't get one since
// JSOPTION_EXTRA_WARNINGS isn't enabled.
var x;
eval("if (x = 3) {}");
