load("e2371540d876710daf38e749390aa2a3.js");
description("This test ensures that properties on an object literal are put directly onto the created object, and don't call setters in the prototype chain.");

shouldBeTrue("({a:true}).a");
shouldBeTrue("({__proto__: {a:false}, a:true}).a");
shouldBeTrue("({__proto__: {set a(x) {throw 'Should not call setter'; }}, a:true}).a");
shouldBeTrue("({__proto__: {get a() {throw 'Should not reach getter'; }}, a:true}).a");
shouldBeTrue("({__proto__: {get a() {throw 'Should not reach getter'; }, b:true}, a:true}).b");

shouldBeTrue("({__proto__: {__proto__: {a:false}}, a:true}).a");
shouldBeTrue("({__proto__: {__proto__: {set a(x) {throw 'Should not call setter'; }}}, a:true}).a");
shouldBeTrue("({__proto__: {__proto__: {get a() {throw 'Should not reach getter'; }}}, a:true}).a");
shouldBeTrue("({__proto__: {__proto__: {get a() {throw 'Should not reach getter'; }, b:true}}, a:true}).b");

load("cf1a0efae1078faee510f7bda78d4902.js");