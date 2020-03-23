load("201224b0d1c296b45befd2285e95dd42.js");
if (typeof parseRegExp === 'undefined')
    quit();

load("6932decb34dbc6eea751e706a2a0650f.js");

test_mix("\\ca", all_flags,
         Atom("\u0001"));
test_mix("\\cz", all_flags,
         Atom("\u001a"));
test_mix("\\cA", all_flags,
         Atom("\u0001"));
test_mix("\\cZ", all_flags,
         Atom("\u001a"));
