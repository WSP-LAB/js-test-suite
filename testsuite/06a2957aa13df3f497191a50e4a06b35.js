load("0d8683db8b3792521a65ad1edba9cf82.js");
load("dada5190587903f93a3604016a6099ce.js");
load("12ac109510b7f76c64aa85230c2ae56c.js");
load("d6bda1bb532e1d31e72a0767088fceea.js");
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
 * Mozilla Foundation.
 * Portions created by the Initial Developer are Copyright (C) 2007
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s): Blake Kaplan
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

var gTestfile = 'regress-386030.js';
//-----------------------------------------------------------------------------
var BUGNUMBER = 386030;
var summary = 'Array.reduce should ignore holes';
var actual = '';
var expect = '';


//-----------------------------------------------------------------------------
test();
//-----------------------------------------------------------------------------

function test()
{
  enterFunc ('test');
  printBugNumber(BUGNUMBER);
  printStatus (summary);
 
  function add(a, b) { return a + b; }
  function testreduce(v) { return v == 3 ? "PASS" : "FAIL"; }

  expect = 'PASS';

  try {
    a = new Array(2);
    a[1] = 3;
    actual = testreduce(a.reduce(add));
  } catch (e) {
    actual = "FAIL, reduce";
  }
  reportCompare(expect, actual, summary + ': 1');

  try {
    a = new Array(2);
    a[0] = 3;
    actual = testreduce(a.reduceRight(add));
  } catch (e) {
    actual = "FAIL, reduceRight";
  }
  reportCompare(expect, actual, summary + ': 2');

  try {
    a = new Array(2);
    a.reduce(add);
    actual = "FAIL, empty reduce";
  } catch (e) {
    actual = "PASS";
  }
  reportCompare(expect, actual, summary + ': 3');

  try {
    a = new Array(2);
    print(a.reduceRight(add));
    actual = "FAIL, empty reduceRight";
  } catch (e) {
    actual = "PASS";
  }
  reportCompare(expect, actual, summary + ': 4');

  exitFunc ('test');
}
