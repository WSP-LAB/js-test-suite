load("201224b0d1c296b45befd2285e95dd42.js");
if (typeof parseRegExp === 'undefined')
    quit();

load("6932decb34dbc6eea751e706a2a0650f.js");

test_mix("\\f", all_flags,
         Atom("\u000c"));

test_mix("\\n", all_flags,
         Atom("\u000a"));

test_mix("\\r", all_flags,
         Atom("\u000d"));

test_mix("\\t", all_flags,
         Atom("\u0009"));

test_mix("\\v", all_flags,
         Atom("\u000b"));
