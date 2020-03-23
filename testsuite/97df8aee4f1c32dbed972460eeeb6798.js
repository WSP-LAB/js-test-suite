load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("6514743a8e7bff37c677024099be3de1.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 4 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


test();

function test()
{   
  enterFunc ("test");

  printBugNumber (24712);
   
  var re = /([\S]+([ \t]+[\S]+)*)[ \t]*=[ \t]*[\S]+/;
  var result = re.exec("Course_Creator = Test") + '';

  reportCompare('Course_Creator = Test,Course_Creator,', result, 'exec() returned null');
   
  exitFunc ("test");
   
}

