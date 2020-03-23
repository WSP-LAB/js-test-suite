load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var BUGNUMBER = 1130860;
var summary = 'Slash and LineTerminator should be escaped correctly.';

print(BUGNUMBER + ": " + summary);

function test(re, source) {
  assertEq(re.source, source);
  assertEq(eval("/" + re.source + "/").source, source);
  assertEq(re.toString(), "/" + source + "/");
}

test(/\\n/,           "\\\\n");
test(/\\\n/,          "\\\\\\n");
test(/\\\\n/,         "\\\\\\\\n");
test(RegExp("\\n"),   "\\n");
test(RegExp("\\\n"),  "\\n");
test(RegExp("\\\\n"), "\\\\n");

test(/\\r/,           "\\\\r");
test(/\\\r/,          "\\\\\\r");
test(/\\\\r/,         "\\\\\\\\r");
test(RegExp("\\r"),   "\\r");
test(RegExp("\\\r"),  "\\r");
test(RegExp("\\\\r"), "\\\\r");

test(/\\u2028/,           "\\\\u2028");
test(/\\\u2028/,          "\\\\\\u2028");
test(/\\\\u2028/,         "\\\\\\\\u2028");
test(RegExp("\\u2028"),   "\\u2028");
test(RegExp("\\\u2028"),  "\\u2028");
test(RegExp("\\\\u2028"), "\\\\u2028");

test(/\\u2029/,           "\\\\u2029");
test(/\\\u2029/,          "\\\\\\u2029");
test(/\\\\u2029/,         "\\\\\\\\u2029");
test(RegExp("\\u2029"),   "\\u2029");
test(RegExp("\\\u2029"),  "\\u2029");
test(RegExp("\\\\u2029"), "\\\\u2029");

test(/\//,            "\\/");
test(/\\\//,          "\\\\\\/");
test(RegExp("/"),     "\\/");
test(RegExp("\/"),    "\\/");
test(RegExp("\\/"),   "\\/");
test(RegExp("\\\/"),  "\\/");
test(RegExp("\\\\/"), "\\\\\\/");

test(/[/]/,             "[/]");
test(/[\/]/,            "[\\/]");
test(/[\\/]/,           "[\\\\/]");
test(/[\\\/]/,          "[\\\\\\/]");
test(RegExp("[/]"),     "[/]");
test(RegExp("[\/]"),    "[/]");
test(RegExp("[\\/]"),   "[\\/]");
test(RegExp("[\\\/]"),  "[\\/]");
test(RegExp("[\\\\/]"), "[\\\\/]");

test(RegExp("\[/\]"),   "[/]");
test(RegExp("\[\\/\]"), "[\\/]");

test(/\[\/\]/,              "\\[\\/\\]");
test(/\[\\\/\]/,            "\\[\\\\\\/\\]");
test(RegExp("\\[/\\]"),     "\\[\\/\\]");
test(RegExp("\\[\/\\]"),    "\\[\\/\\]");
test(RegExp("\\[\\/\\]"),   "\\[\\/\\]");
test(RegExp("\\[\\\/\\]"),  "\\[\\/\\]");
test(RegExp("\\[\\\\/\\]"), "\\[\\\\\\/\\]");

if (typeof reportCompare === "function")
  reportCompare(true, true);
