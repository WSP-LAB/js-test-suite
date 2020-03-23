load("201224b0d1c296b45befd2285e95dd42.js");
function TestCase(n) {
  this.name = undefined;
  this.description = undefined;
}
gczeal(7,1);
eval("\
function reportCompare() { return new TestCase; };\
reportCompare();\
Object.defineProperty(Object.prototype, 'name', {});\
reportCompare();\
");
