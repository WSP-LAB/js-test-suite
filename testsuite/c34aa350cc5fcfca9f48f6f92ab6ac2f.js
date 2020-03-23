load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
load("7313fa08969f1df598c154ed8ced2840.js");
/* Capture group reset to undefined during second iteration, so backreference doesn't see prior result. */
var re = /(?:^(a)|\1(a)|(ab)){2}/;
var str = 'aab';
var actual = re.exec(str);
var expected = makeExpectedMatch(['aa', undefined, 'a', undefined], 0, str);
checkRegExpMatch(actual, expected);

if (typeof reportCompare === 'function')
    reportCompare(true, true);
