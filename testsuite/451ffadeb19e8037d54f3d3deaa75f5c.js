load("201224b0d1c296b45befd2285e95dd42.js");
var re = /.*(a\w).*/i;
var str = "abccccccad";
for (var k = 0; k < 100; k++) {
  re.test(str);
  assertEq('ad', RegExp['$1']);
}
