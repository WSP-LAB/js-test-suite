load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| module; error: SyntaxError
import { a } from "module1.js";
delete a;
