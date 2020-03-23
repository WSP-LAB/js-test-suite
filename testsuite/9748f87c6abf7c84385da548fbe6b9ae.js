load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

evaluate("\
function fatty() {\
    try { fatty(); } catch (e) {\
        for each (foo in [1]) {}\
    }\
}\
fatty();\
");
