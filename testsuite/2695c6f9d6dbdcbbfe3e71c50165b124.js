load("201224b0d1c296b45befd2285e95dd42.js");
function newFunc(x) { return Function(x)(); }
newFunc(` 
  var BUGNUMBER = 8[ anonymous = true ]--;
  () => BUGNUMBER;
`);

