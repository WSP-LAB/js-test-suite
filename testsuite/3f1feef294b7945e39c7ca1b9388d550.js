load("201224b0d1c296b45befd2285e95dd42.js");
if (typeof parseRegExp === 'undefined')
    quit();

load("6932decb34dbc6eea751e706a2a0650f.js");

// SyntaxCharacter

test("\\^", all_flags,
     Atom("^"));
test("\\$", all_flags,
     Atom("$"));
test("\\\\", all_flags,
     Atom("\\"));
test("\\.", all_flags,
     Atom("."));
test("\\*", all_flags,
     Atom("*"));
test("\\+", all_flags,
     Atom("+"));
test("\\?", all_flags,
     Atom("?"));
test("\\(", all_flags,
     Atom("("));
test("\\)", all_flags,
     Atom(")"));
test("\\[", all_flags,
     Atom("["));
test("\\]", all_flags,
     Atom("]"));
test("\\{", all_flags,
     Atom("{"));
test("\\}", all_flags,
     Atom("}"));
test("\\|", all_flags,
     Atom("|"));

// Slash

test("\\/", all_flags,
     Atom("/"));

// SourceCharacter

test("\\P", no_unicode_flags,
     Atom("P"));

test("\\uX", no_unicode_flags,
     Atom("uX"));

test("\\u{0000}", no_unicode_flags,
     Quantifier(0, 0, "GREEDY", Atom("u")));

test("\\c_", no_unicode_flags,
     Atom("\\c_"));

