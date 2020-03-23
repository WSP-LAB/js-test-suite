load("e2371540d876710daf38e749390aa2a3.js");
description('Tests for ES6 arrow function, this should be overwritten during invoke bind');

var d = {
  x : "bar",
  y : function() { return z => this.x + z; }
};

var e = { x : "baz" };

shouldBe("d.y().bind(e, 'ley')()", "'barley'");

var successfullyParsed = true;

load("cf1a0efae1078faee510f7bda78d4902.js");
