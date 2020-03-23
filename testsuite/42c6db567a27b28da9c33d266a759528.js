load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| module; error: TypeError
import * as ns from "module1.js";
ns = 2;
