load("0d8683db8b3792521a65ad1edba9cf82.js");
load("dada5190587903f93a3604016a6099ce.js");
load("488f6f0ad9d5386b1197f53e0a162bb9.js");
load("0afa33476e37a2be7fe5999ed35d4073.js");
/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is JavaScript Engine testing utilities.
 *
 * The Initial Developer of the Original Code is
 * Netscape Communication Corporation.
 * Portions created by the Initial Developer are Copyright (C) 1998
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

gTestfile = 'expression-011.js';

/**
   File Name:          expression-011.js
   Corresponds To:     ecma/Expressions/11.2.2-6-n.js
   ECMA Section:       11.2.2. The new operator
   Description:
   Author:             christine@netscape.com
   Date:               12 november 1997
*/
var SECTION = "expression-011";
var VERSION = "JS1_4";
var TITLE   = "The new operator";

startTest();
writeHeaderToLog( SECTION + " "+ TITLE);

var BOOLEAN  = true;

var result = "Failed";
var exception = "No exception thrown";
var expect = "Passed";

try {
  var OBJECT = new BOOLEAN();
} catch ( e ) {
  result = expect;
  exception = e.toString();
}

new TestCase(
  SECTION,
  "BOOLEAN = true; result = new BOOLEAN()" +
  " (threw " + exception +")",
  expect,
  result );

test();

