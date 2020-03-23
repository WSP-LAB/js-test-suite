load("201224b0d1c296b45befd2285e95dd42.js");

function TestCase() {
  this.passed = 'x';
}
result = "pass";
for (var i = 0; i < 100; i++)
    new TestCase(result);
function Gen2(value) {}
Gen2.prototype = new TestCase();
