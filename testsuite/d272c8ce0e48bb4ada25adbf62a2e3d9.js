load("201224b0d1c296b45befd2285e95dd42.js");
if (typeof parseRegExp === 'undefined')
    quit();

load("6932decb34dbc6eea751e706a2a0650f.js");

test_mix("^", no_multiline_flags,
         Assertion("START_OF_INPUT"));
test_mix("^", multiline_flags,
         Assertion("START_OF_LINE"));

test_mix("$", no_multiline_flags,
         Assertion("END_OF_INPUT"));
test_mix("$", multiline_flags,
         Assertion("END_OF_LINE"));

test_mix("\\b", all_flags,
         Assertion("BOUNDARY"));

test_mix("\\B", all_flags,
         Assertion("NON_BOUNDARY"));
