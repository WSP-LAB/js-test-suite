load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("1b3dbc1cddb6b5cc8ace501cab6be659.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*
 * Bug 648355: Function.prototype.isGenerator
 */

reportCompare(true, "isGenerator" in Function.prototype, "Function.prototype.isGenerator present");

reportCompare(false, (function(){}).isGenerator(), "lambda is not a generator fn");
reportCompare(false, Function.prototype.toString.isGenerator(), "native is not a generator fn");
reportCompare(false, (function(){with(obj){}}).isGenerator(), "heavyweight is not a generator fn");
reportCompare(false, (function(){obj}).isGenerator(), "upvar function is not a generator fn");

reportCompare(true, (function(){yield}).isGenerator(), "simple generator fn");
reportCompare(true, (function(){with(obj){yield}}).isGenerator(), "heavyweight generator fn");
reportCompare(true, (function(){yield; obj}).isGenerator(), "upvar generator fn");

reportCompare(false, Function.prototype.isGenerator.call(42), "number is not a generator fn");
reportCompare(false, Function.prototype.isGenerator.call({}), "vanilla object is not a generator fn");
reportCompare(false, Function.prototype.isGenerator.call(new Date()), "date object is not a generator fn");
