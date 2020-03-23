load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("b838f1585aea1338f85dfef2026aaa95.js");
/* -*- tab-width: 2; indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
 *  File Name:          while-003
 *  ECMA Section:
 *  Description:        while statement
 *
 *  The while expression evaluates to true, Statement returns abrupt completion.
 *
 *  Author:             christine@netscape.com
 *  Date:               11 August 1998
 */
var SECTION = "while-003";
var VERSION = "ECMA_2";
var TITLE   = "while statement";

startTest();
writeHeaderToLog( SECTION + " "+ TITLE);

DoWhile( new DoWhileObject(
	   "while expression is true",
	   true,
	   "result = \"pass\";" ));

DoWhile( new DoWhileObject(
	   "while expression is 1",
	   1,
	   "result = \"pass\";" ));

DoWhile( new DoWhileObject(
	   "while expression is new Boolean(false)",
	   new Boolean(false),
	   "result = \"pass\";" ));

DoWhile( new DoWhileObject(
	   "while expression is new Object()",
	   new Object(),
	   "result = \"pass\";" ));

DoWhile( new DoWhileObject(
	   "while expression is \"hi\"",
	   "hi",
	   "result = \"pass\";" ));
/*
  DoWhile( new DoWhileObject(
  "while expression has a continue in it",
  "true",
  "if ( i == void 0 ) i = 0; result=\"pass\"; if ( ++i == 1 ) {continue;} else {break;} result=\"fail\";"
  ));
*/
test();

function DoWhileObject( d, e, s ) {
  this.description = d;
  this.whileExpression = e;
  this.statements = s;
}

function DoWhile( object ) {
  result = "fail:  statements in while block were not evaluated";

  while ( expression = object.whileExpression ) {
    eval( object.statements );
    break;
  }

  // verify that the while expression was evaluated

  new TestCase(
    SECTION,
    "verify that while expression was evaluated (should be "+
    object.whileExpression +")",
    "pass",
    (object.whileExpression == expression ||
     ( isNaN(object.whileExpression) && isNaN(expression) )
      ) ? "pass" : "fail" );

  new TestCase(
    SECTION,
    object.description,
    "pass",
    result );
}
