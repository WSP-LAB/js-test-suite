load("201224b0d1c296b45befd2285e95dd42.js");

function test1() {}
function test() { test1.call(this); }
var length = 30 * 1024 - 1;
var obj = new test();
for(var i = 0 ; i < length ; i++) {
  obj.next = new (function  (   )  {  }  )  ();
  obj = obj.next;
}
