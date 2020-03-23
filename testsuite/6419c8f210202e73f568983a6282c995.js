load("e2371540d876710daf38e749390aa2a3.js");
description("This test makes sure we aren't putting the iterator constructors on the global object.");

var global = this;
shouldBeFalse("'ArrayIterator' in this");
shouldBeFalse("'ArgumentsIterator' in this");
shouldBeFalse("'MapIterator' in this");
shouldBeFalse("'SetIterator' in this");

load("cf1a0efae1078faee510f7bda78d4902.js");
