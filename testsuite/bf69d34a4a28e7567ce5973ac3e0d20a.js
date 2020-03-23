load("e2371540d876710daf38e749390aa2a3.js");
shouldBe("function f() { g()++; } f.toString()", "'function f() { g()++; }'");
shouldBe("function f() { g()--; } f.toString()", "'function f() { g()--; }'");
shouldBe("function f() { ++g(); } f.toString()", "'function f() { ++g(); }'");
shouldBe("function f() { --g(); } f.toString()", "'function f() { --g(); }'");
shouldBe("function f() { g() = 1; } f.toString()", "'function f() { g() = 1; }'");
shouldBe("function f() { g() += 1; } f.toString()", "'function f() { g() += 1; }'");
shouldThrow("g()++", "'ReferenceError: Postfix ++ operator applied to value that is not a reference.'");
shouldThrow("g()--", "'ReferenceError: Postfix -- operator applied to value that is not a reference.'");
shouldThrow("++g()", "'ReferenceError: Prefix ++ operator applied to value that is not a reference.'");
shouldThrow("--g()", "'ReferenceError: Prefix -- operator applied to value that is not a reference.'");
shouldThrow("g() = 1", "'ReferenceError: Left side of assignment is not a reference.'");
shouldThrow("g() += 1", "'ReferenceError: Left side of assignment is not a reference.'");

load("cf1a0efae1078faee510f7bda78d4902.js");
