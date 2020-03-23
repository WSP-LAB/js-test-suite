load("e2371540d876710daf38e749390aa2a3.js");
description('Tests for ES6 arrow function, this should be overwritten during invoke call&apply');

var d = {
  x : "foo",
  y : function() { return () => this.x; }
};

var e = { x : "bar" };

shouldBe('d.y().call(e)', "'foo'");
shouldBe('d.y().apply(e)', "'foo'");

var successfullyParsed = true;

load("cf1a0efae1078faee510f7bda78d4902.js");
