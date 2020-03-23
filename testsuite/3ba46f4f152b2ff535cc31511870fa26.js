load("201224b0d1c296b45befd2285e95dd42.js");
'abcdef'.replace(/a(\w+)c/, function() {
    assertEq(RegExp.lastMatch, 'abc');
    '123456'.replace(/1(\d+)3/, function() {
        assertEq(RegExp.lastMatch, '123');
    });
    assertEq(RegExp.lastMatch, '123');
});
assertEq(RegExp.lastMatch, '123');
