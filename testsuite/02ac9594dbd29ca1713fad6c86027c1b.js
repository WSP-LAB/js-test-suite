load("188875624e386d01d46f59a2dbf5d1c9.js");
/**
 *  File Name:
 *  ECMA Section:
 *  Description:
 *
 *
 *  Author:             christine@netscape.com
 *  Date:               11 August 1998
 */
    var SECTION = "";
    var VERSION = "ECMA_2";
    var TITLE   = "Keywords";

    startTest();

    var result = "failed";

    try {
		eval("super;");
	} 
	catch (x) {
		if (x instanceof SyntaxError)
			result = x.name;
	}

    AddTestCase(
        "using the expression \"super\" shouldn't cause js to crash",
        "SyntaxError",
        result );

    test();
