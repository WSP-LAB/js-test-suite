load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
load("008eabf74323023a3b4794d71c356b14.js");
assertEq(JSON.stringify({foo: 123}),
         '{"foo":123}');
assertEq(JSON.stringify({foo: 123, bar: function () {}}),
         '{"foo":123}');
assertEq(JSON.stringify({foo: 123, bar: function () {}, baz: 123}),
         '{"foo":123,"baz":123}');

assertEq(JSON.stringify([123]),
         '[123]');
assertEq(JSON.stringify([123, function () {}]),
         '[123,null]');
assertEq(JSON.stringify([123, function () {}, 456]),
         '[123,null,456]');

/******************************************************************************/

if (typeof reportCompare === "function")
  reportCompare(true, true);

print("Tests complete");
