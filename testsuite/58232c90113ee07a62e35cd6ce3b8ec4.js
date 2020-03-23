load("201224b0d1c296b45befd2285e95dd42.js");
foo = {}
foo.y = 3;
foo.y = function () {}
Object.defineProperty(foo, "y", { set:function(){} })
gc()
delete foo.y
gc();
