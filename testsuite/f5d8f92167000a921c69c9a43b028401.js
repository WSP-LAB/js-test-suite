load("e2371540d876710daf38e749390aa2a3.js");
description('Tests for ES6 arrow function declaration body as block');

debug('f = () => {}');
var f = () => {};
shouldBe("typeof f()", "'undefined'");

debug('g = () => ({})');
var g = () => ({});
shouldBe("typeof g()", "'object'");

var successfullyParsed = true;

load("cf1a0efae1078faee510f7bda78d4902.js");
