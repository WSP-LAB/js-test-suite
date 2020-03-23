load("e2371540d876710daf38e749390aa2a3.js");
description('Tests for ES6 arrow function lexical bind of arguments on top level');

let foo = () => arguments;
let boo = () => arguments[0];
let bar = error => error ? arguments : 'no-error';

shouldThrow('foo()');
shouldThrow('boo()');
shouldThrow('bar(true)');
shouldBe('bar(false)', '"no-error"');

var successfullyParsed = true;

load("cf1a0efae1078faee510f7bda78d4902.js");
