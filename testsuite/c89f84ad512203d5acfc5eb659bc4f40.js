load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| module

import { isOdd } from "isOdd.js"
import { isEven } from "isEven.js"

assertEq(isEven(4), true);
assertEq(isOdd(5), true);
