load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
[1, "", true, Symbol(), undefined].forEach(props => {
    assertEq(Object.getPrototypeOf(Object.create(null, props)), null);
});

assertThrowsInstanceOf(() => Object.create(null, null), TypeError);

if (typeof reportCompare === "function")
    reportCompare(true, true);
