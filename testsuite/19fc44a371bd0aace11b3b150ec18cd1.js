load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributor: Bob Clary
 */

//-----------------------------------------------------------------------------
// originally reported by Jens Thiele <karme@unforgettable.com> in
var BUGNUMBER = 240577;
var summary = 'object.watch execution context';
var actual = '';
var expect = '';

printBugNumber(BUGNUMBER);
printStatus (summary);

var createWatcher = function ( watchlabel )
{
  var watcher = function (property, oldvalue, newvalue)
  {
    actual += watchlabel; return newvalue;
  };
  return watcher;
};

var watcher1 = createWatcher('watcher1');

var object = {property: 'value'};

object.watch('property', watcher1);

object.property = 'newvalue';

expect = 'watcher1';

reportCompare(expect, actual, summary);
