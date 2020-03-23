load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
assertThrowsInstanceOf(() => eval("() \n => {}"), SyntaxError);
assertThrowsInstanceOf(() => eval("a \n => {}"), SyntaxError);
assertThrowsInstanceOf(() => eval("(a) /*\n*/ => {}"), SyntaxError);
assertThrowsInstanceOf(() => eval("(a, b) \n => {}"), SyntaxError);
assertThrowsInstanceOf(() => eval("(a, b = 1) \n => {}"), SyntaxError);
assertThrowsInstanceOf(() => eval("(a, ...b) \n => {}"), SyntaxError);
assertThrowsInstanceOf(() => eval("(a, b = 1, ...c) \n => {}"), SyntaxError);

reportCompare(0, 0, "ok");
