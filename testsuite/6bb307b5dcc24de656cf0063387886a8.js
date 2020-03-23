load("201224b0d1c296b45befd2285e95dd42.js");
if (typeof parseRegExp === 'undefined')
    quit();

load("6932decb34dbc6eea751e706a2a0650f.js");

test("[\\ca]", all_flags,
     CharacterClass([
         ["\u0001", "\u0001"]
     ]));
test("[\\cz]", all_flags,
     CharacterClass([
         ["\u001a", "\u001a"]
     ]));
test("[\\cA]", all_flags,
     CharacterClass([
         ["\u0001", "\u0001"]
     ]));
test("[\\cZ]", all_flags,
     CharacterClass([
         ["\u001a", "\u001a"]
     ]));

// Invalid

test("[\\c]", no_unicode_flags,
     CharacterClass([
         ["\\", "\\"],
         ["c", "c"]
     ]));
test("[\\c=]", no_unicode_flags,
     CharacterClass([
         ["\\", "\\"],
         ["c", "c"],
         ["=", "="]
     ]));
