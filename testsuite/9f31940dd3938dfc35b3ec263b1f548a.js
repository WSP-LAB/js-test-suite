load("201224b0d1c296b45befd2285e95dd42.js");
if (typeof parseRegExp === 'undefined')
    quit();

load("6932decb34dbc6eea751e706a2a0650f.js");

test("[\\0]", all_flags,
     CharacterClass([
         ["\u0000", "\u0000"]
     ]));
