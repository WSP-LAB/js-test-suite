load("615498c4a0b6e677f08c0882a26c3e30.js");
/* The contents of this file are subject to the Netscape Public
 * License Version 1.1 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a copy of
 * the License at http://www.mozilla.org/NPL/
 *
 * Software distributed under the License is distributed on an "AS
 * IS" basis, WITHOUT WARRANTY OF ANY KIND, either express or
 * implied. See the License for the specific language governing
 * rights and limitations under the License.
 *
 * The Original Code is Mozilla Communicator client code, released March
 * 31, 1998.
 *
 * The Initial Developer of the Original Code is Netscape Communications
 * Corporation. Portions created by Netscape are
 * Copyright (C) 1998 Netscape Communications Corporation. All
 * Rights Reserved.
 *
 * Contributor(s): 
 * 
 */
/**
    File Name:          15.5.3.1-4.js
    ECMA Section:       15.5.3.1 Properties of the String Constructor

    Description:        The initial value of String.prototype is the built-in
                        String prototype object.

                        This property shall have the attributes [ DontEnum,
                        DontDelete, ReadOnly]

                        This tests the DontDelete attribute.

    Author:             christine@netscape.com
    Date:               1 october 1997
*/

    var SECTION = "15.5.3.1-4";
    var VERSION = "ECMA_1";
    startTest();
    var TITLE   = "Properties of the String Constructor";

    writeHeaderToLog( SECTION + " "+ TITLE);

    var testcases = getTestCases();
    test();


function getTestCases() {
    var array = new Array();
    var item = 0;

    array[item++] = new TestCase( SECTION,	"delete( String.prototype );String.prototype",   String.prototype,   eval("delete ( String.prototype );String.prototype") );
    return ( array );
}
function test() {
    for ( tc=0; tc < testcases.length; tc++ ) {
        testcases[tc].passed = writeTestCaseResult(
                            testcases[tc].expect,
                            testcases[tc].actual,
                            testcases[tc].description +" = "+
                            testcases[tc].actual );

        testcases[tc].reason += ( testcases[tc].passed ) ? "" : "wrong value ";
    }
    stopTest();
    return ( testcases );
}
