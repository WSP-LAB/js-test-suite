load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError

function g() {
  var a = [];
  for (var i = 0; i < 10; i++)
    a.push(i, 1.5);
  for (var i = 0; i < 32 ; i++) {
    print(i);
    a[i].m = function() {} 
  }
}
g();
