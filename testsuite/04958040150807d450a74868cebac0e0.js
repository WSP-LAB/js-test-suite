load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("1b3dbc1cddb6b5cc8ace501cab6be659.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributor:
 *   Gary Kwong
 */

var gTestfile = 'watch-undefined-setter.js';
//-----------------------------------------------------------------------------
var BUGNUMBER = 560277;
var summary =
  'Crash [@ JSObject::getParent] or [@ js_WrapWatchedSetter] or ' +
  '[@ js_GetClassPrototype]';

this.watch("x", function() { });
Object.defineProperty(this, "x", { set: undefined, configurable: true });

reportCompare(true, true);
