load("201224b0d1c296b45befd2285e95dd42.js");
if (typeof parseRegExp === 'undefined')
    quit();

load("6932decb34dbc6eea751e706a2a0650f.js");

test_mix("(?=abc)", all_flags,
         Lookahead(Atom("abc")));

test_mix("(?!abc)", all_flags,
         NegativeLookahead(Atom("abc")));

test_mix("(?=abc)+", no_unicode_flags,
         Lookahead(Atom("abc")));

// Lookahead becomes Empty because max_match of Lookahead is 0 and the min vaue
// of Quantifier is also 0.
test("(?=abc)*", no_unicode_flags,
     Empty());
test("X(?=abc)*Y", no_unicode_flags,
     Alternative([
         Atom("X"),
         Atom("Y"),
     ]));

test("(?=abc)?", no_unicode_flags,
     Empty());
test("X(?=abc)?Y", no_unicode_flags,
     Alternative([
         Atom("X"),
         Atom("Y"),
     ]));
