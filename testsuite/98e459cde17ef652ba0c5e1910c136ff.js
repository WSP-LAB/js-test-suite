load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

if (typeof disassemble != 'undefined')
{
    var func = disassemble(function() { return "c\\d"; })

    // The disassembled function will contain a bytecode "string" with the content of the string next to it.
    // Check if that string isn't over-escaped i.e. \\ isn't escaped to \\\\ .
    assertEq(func.indexOf("\\\\\\\\"), -1)
}

reportCompare(0, 0, 'ok');
