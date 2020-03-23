load("201224b0d1c296b45befd2285e95dd42.js");
// RegExp after variable name get parsed or throws error correctly.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

assertNoWarning(() => Function("var foo \n /bar/g"), SyntaxError,
                "RegExp in next line should be parsed");
assertThrowsInstanceOf(() => Function("var foo /bar/g"), SyntaxError,
                       "RegExp in same line should be error");
