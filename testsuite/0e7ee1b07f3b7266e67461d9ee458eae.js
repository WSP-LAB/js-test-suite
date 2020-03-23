load("201224b0d1c296b45befd2285e95dd42.js");
var s1 = 'xx';
for (var x = 0; x < 10 ; ++x ) { 
  new function() { return s1++; };
  gc();
}
