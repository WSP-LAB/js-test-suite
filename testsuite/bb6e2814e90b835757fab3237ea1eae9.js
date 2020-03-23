load("201224b0d1c296b45befd2285e95dd42.js");
if (typeof parseRegExp === 'undefined')
    quit();

load("6932decb34dbc6eea751e706a2a0650f.js");

test("()", all_flags,
     Capture(1, Empty()));

test("(a)", all_flags,
     Capture(1, Atom("a")));

test("((a()b))c(d)", all_flags,
     Alternative([
         Capture(1, Capture(2, Alternative([
             Atom("a"),
             Capture(3, Empty()),
             Atom("b")
         ]))),
         Atom("c"),
         Capture(4, Atom("d"))
     ]));
