load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

function throws(code) {
    var type;
    try {
        eval(code);
    } catch (ex) {
        type = ex.name;
    }
    assertEq(type, 'SyntaxError');
}

var s = '\\u0073';
throws('var thi' + s);
throws('switch (' + s + 'witch) {}')
throws('var ' + s + 'witch');

if (typeof reportCompare == 'function')
    reportCompare(true, true);
