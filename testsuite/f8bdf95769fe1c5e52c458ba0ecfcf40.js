load("201224b0d1c296b45befd2285e95dd42.js");
var flag = 0;
var a = {};
Object.defineProperty(a, "value", {set: function(x) {}});
a.watch("value", function(){flag++;});

for(var i = 0; i < 100; i++) {
    a.value = i;
    assertEq(flag, i+1);
}
