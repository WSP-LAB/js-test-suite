load("201224b0d1c296b45befd2285e95dd42.js");
if (typeof parseRegExp === 'undefined')
    quit();

load("6932decb34dbc6eea751e706a2a0650f.js");

test("(?:)", all_flags,
     Empty());
test("(?:a)", all_flags,
     Atom("a"));
test("X(?:a)Y", all_flags,
     Text([
         Atom("X"),
         Atom("a"),
         Atom("Y")
     ]));
