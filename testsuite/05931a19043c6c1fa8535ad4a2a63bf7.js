load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
if (typeof window === "undefined")
    window = this;

Object.defineProperty(window, "foo", {
    get: function() { return 5; },
    configurable: true
});

for (var i = 0; i < 100; ++i)
    assertEq(window.foo, 5);

if (typeof reportCompare === "function")
    reportCompare(0, 0);
