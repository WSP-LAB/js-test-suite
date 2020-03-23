load("201224b0d1c296b45befd2285e95dd42.js");
function whoo() {
    // Cause mjit to use the script's RegExpObject directly when it compiles this function.
    assertEq(/foo.*baz/.test('foobarbaz'), true);
}

var orig_test = RegExp.prototype.test
for (var i = 0; i < 50; ++i)
    whoo();
eval('RegExp.prototype.test = function(str) { return orig_test.call(this, str) }')
for (var i = 0; i < 50; ++i)
    whoo();
RegExp.prototype.test = orig_test;
gc();
whoo();

