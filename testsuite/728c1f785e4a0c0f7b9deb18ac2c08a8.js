load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
load("7313fa08969f1df598c154ed8ced2840.js");
/* Resetting of inner capture groups across quantified capturing parens. */
var re = /(?:(f)(o)(o)|(b)(a)(r))*/;
var str = 'foobar';
var actual = re.exec(str);
var expected = makeExpectedMatch(['foobar', undefined, undefined, undefined, 'b', 'a', 'r'], 0, str);
checkRegExpMatch(actual, expected);

if (typeof reportCompare === 'function')
    reportCompare(true, true);
