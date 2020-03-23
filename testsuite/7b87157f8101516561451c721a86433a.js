load("201224b0d1c296b45befd2285e95dd42.js");
// don't assert
var f = function(){};
for (var p in f);
Object.defineProperty(f, "j", ({configurable: true, value: "a"}));
Object.defineProperty(f, "k", ({configurable: true, value: "b"}));
Object.defineProperty(f, "j", ({configurable: true, get: function() {}}));
delete f.k;
Object.defineProperty(f, "j", ({configurable: false}));
