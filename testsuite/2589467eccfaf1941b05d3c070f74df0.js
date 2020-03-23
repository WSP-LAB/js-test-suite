load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("1b3dbc1cddb6b5cc8ace501cab6be659.js");
// |reftest| skip-if(!xulRuntime.shell)
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
// Contributor: Blake Kaplan

function expect(actual, arg) {
    reportCompare(expect.expected, actual, arg);
}

var window = { set x(y) { expect(this, y) }, y: 4 };
expect.expected = window;
window.x = "setting through a setter directly";
window.y = 5;
reportCompare(5, window.y, "setting properties works");
var easy = { easy: 'yes', __proto__: window }
expect.expected = easy;
easy.x = "setting through a setter all-native on prototype";
easy.y = 6;
reportCompare(5, window.y, "window.y remains as it was");
reportCompare(6, easy.y, "shadowing works properly");

var sandbox = evalcx('');
sandbox.window = window;
sandbox.print = print;
sandbox.expect = expect;
var hard = evalcx('Object.create(window)', sandbox);
expect.expected = hard;
hard.x = "a setter through proxy -> native";
hard.y = 6;
reportCompare(5, window.y, "window.y remains as it was through a proxy");
reportCompare(6, hard.y, "shadowing works on proxies");

hard.__proto__ = { 'passed': true }
reportCompare(true, hard.passed, "can set proxy.__proto__ through a native");

var inverse = evalcx('({ set x(y) { expect(this, y); }, y: 4 })', sandbox);
expect.expected = inverse;
inverse.x = "setting through a proxy directly";
inverse.y = 5;
reportCompare(5, inverse.y, "setting properties works on proxies");

var inversehard = Object.create(inverse);
expect.expected = inversehard;
inversehard.x = "setting through a setter with a proxy on the proto chain";
inversehard.y = 6;
reportCompare(5, inverse.y, "inverse.y remains as it was");
reportCompare(6, inversehard.y, "shadowing works native -> proxy");

inversehard.__proto__ = { 'passed': true }
reportCompare(true, inversehard.passed, "can set native.__proto__ through a proxy");
