load("201224b0d1c296b45befd2285e95dd42.js");
// RegExp after do-while get parsed.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

assertNoWarning(() => Function("do {} while (true) \n /bar/g"), SyntaxError,
                "RegExp in next line should be parsed");
assertNoWarning(() => Function("do {} while (true) /bar/g"), SyntaxError,
                "RegExp in same line should be parsed");
