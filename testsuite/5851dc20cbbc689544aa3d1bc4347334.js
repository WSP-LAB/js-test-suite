load("201224b0d1c296b45befd2285e95dd42.js");
if (typeof parseRegExp === 'undefined')
    quit();

load("6932decb34dbc6eea751e706a2a0650f.js");

test_mix(".", no_unicode_flags,
         CharacterClass([
             ["\u0000", "\u0009"],
             ["\u000b", "\u000c"],
             ["\u000e", "\u2027"],
             ["\u202A", "\uFFFF"]
         ]));

test_mix(".", unicode_flags,
         AllSurrogateAndCharacterClass([
             ["\u0000", "\u0009"],
             ["\u000b", "\u000c"],
             ["\u000e", "\u2027"],
             ["\u202A", "\uD7FF"],
             ["\uE000", "\uFFFF"]
         ]));
