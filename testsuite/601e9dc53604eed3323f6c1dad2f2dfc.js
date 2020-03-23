load("201224b0d1c296b45befd2285e95dd42.js");
if (typeof parseRegExp === 'undefined')
    quit();

load("6932decb34dbc6eea751e706a2a0650f.js");

test("[\\f]", all_flags,
     CharacterClass([
         ["\u000c", "\u000c"]
     ]));

test("[\\n]", all_flags,
     CharacterClass([
         ["\u000a", "\u000a"]
     ]));

test("[\\r]", all_flags,
     CharacterClass([
         ["\u000d", "\u000d"]
     ]));

test("[\\t]", all_flags,
     CharacterClass([
         ["\u0009", "\u0009"]
     ]));

test("[\\v]", all_flags,
     CharacterClass([
         ["\u000b", "\u000b"]
     ]));
