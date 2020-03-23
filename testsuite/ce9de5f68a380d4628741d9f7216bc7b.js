load("201224b0d1c296b45befd2285e95dd42.js");
test();
function test() {
  for (var i=0; i<2; ++i) {};
  try {}  catch ([ q ]) {
      function g() {}
  }     
}
