load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("e7298b87458610fb43224d2d0185d930.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

var BUGNUMBER = 568056;
var summary = "Iterator(obj) must not go up obj's prototype chain";

var foo = {
    z: 9,
};

var bar = {
    __proto__: foo,
    a: 1,
    b: 2,
};

var results = [];
for each (let [key, value] in Iterator(bar))
    results.push(key + ":" + value);

var actual = results.join(';')
var expect = "a:1;b:2";

reportCompare(expect, actual, summary);
